import { useTexture } from "@react-three/drei";
import { RootState, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { RawShaderMaterial, RGBAFormat, Vector3, VideoTexture } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefBooleanType, RefMeshType } from "../../../../shared/Types/RefTypes";
import {
  achievementAtlasDataMap,
  achievementBadgeGeometry,
  fragmentShader,
  vertexShader,
} from "./ScreenSpaceConstants";

const ScreenSpace: FC = () => {
  // Refs
  const videoMeshRef: RefMeshType = useRef(null);
  const isPlayingRef: RefBooleanType = useRef(false);
  const radialSwitchRef: RefBooleanType = useRef(false);

  // Global State
  const {
    activeLanguage,
    activeAchievementBadge,
    setActiveAchievementBadge,
    achievementVideoTexture,
  } = useGlobalState(
    (state) => ({
      activeLanguage: state.activeLanguage,
      activeAchievementBadge: state.activeAchievementBadge,
      achievementVideoTexture: state.achievementVideoTexture,
      setActiveAchievementBadge: state.setActiveAchievementBadge,
    }),
    shallow,
  );

  // Textures
  const engTitlesTexture = useTexture(
    "/game_assets/textures/badge_title_eng.webp",
  );
  const badgeIconsTexture = useTexture(
    "/game_assets/textures/badge_icons.webp",
  );

  // Dynamic Defines
  const badgeVideo = useMemo(() => {
    const badgeVideo = new VideoTexture(
      achievementVideoTexture as HTMLVideoElement,
    );

    badgeVideo.format = RGBAFormat;

    return badgeVideo;
  }, [achievementVideoTexture]);

  const badgeShaderUniforms = useMemo(() => {
    return {
      uAlpha: { value: 0 },
      uTime: { value: -1 },
      uIconScale: { value: achievementAtlasDataMap.big_brain.iconScale },
      uTextScale: { value: achievementAtlasDataMap.big_brain.textScale },
      uIconCell: { value: achievementAtlasDataMap.big_brain.iconCell.clone() },
      uTextCell: { value: achievementAtlasDataMap.big_brain.textCell.clone() },
      uVideoTexture: { value: badgeVideo },
      uIcons: { value: badgeIconsTexture },
      uEngText: { value: engTitlesTexture },
      uBadgeParams: {
        value: achievementAtlasDataMap.big_brain.badgeParams.clone(),
      },
      uIconCellOffset: {
        value: achievementAtlasDataMap.big_brain.iconCellOffset.clone(),
      },
      uTextCellOffset: {
        value: achievementAtlasDataMap.big_brain.textCellOffset.clone(),
      },
      uLanguageIndex: { value: activeLanguage === "eng" ? 0 : 1 },
    };
  }, [activeLanguage, engTitlesTexture, badgeIconsTexture, badgeVideo]);

  const achievementBadgeMaterial = useMemo(() => {
    return new RawShaderMaterial({
      transparent: true,
      uniforms: badgeShaderUniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }, [badgeShaderUniforms]);

  const handleRadialMask: ConstantVoidFunctionType = useCallback((): void => {
    gsap.fromTo(
      achievementBadgeMaterial.uniforms.uTime,
      { value: -1 },
      {
        value: 1,
        duration: 0.5,
        overwrite: true,
      },
    );
  }, [achievementBadgeMaterial]);

  const handleUpdateBadgeAtlas: ConstantVoidFunctionType =
    useCallback((): void => {
      if (isPlayingRef.current) return;
      if (!videoMeshRef.current) return;
      if (!activeAchievementBadge) return;
      if (!achievementVideoTexture) return;
      if (!achievementBadgeMaterial) return;

      achievementBadgeMaterial.uniforms.uIconCell.value.copy(
        achievementAtlasDataMap[activeAchievementBadge].iconCell,
      );

      achievementBadgeMaterial.uniforms.uTextCell.value.copy(
        achievementAtlasDataMap[activeAchievementBadge].textCell,
      );

      achievementBadgeMaterial.uniforms.uIconScale.value =
        achievementAtlasDataMap[activeAchievementBadge].iconScale;

      achievementBadgeMaterial.uniforms.uTextScale.value =
        achievementAtlasDataMap[activeAchievementBadge].textScale;

      achievementBadgeMaterial.uniforms.uBadgeParams.value.copy(
        achievementAtlasDataMap[activeAchievementBadge].badgeParams,
      );

      achievementBadgeMaterial.uniforms.uIconCellOffset.value.copy(
        achievementAtlasDataMap[activeAchievementBadge].iconCellOffset,
      );

      achievementBadgeMaterial.uniforms.uTextCellOffset.value.copy(
        achievementAtlasDataMap[activeAchievementBadge].textCellOffset,
      );

      isPlayingRef.current = true;

      gsap.fromTo(
        videoMeshRef.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 0.35,
          y: 0.35,
          z: 0.35,
          delay: 0.1,
          duration: 0.5,
          overwrite: true,
          ease: BACK_1_OUT,
          onStart: () => {
            gsap.fromTo(
              achievementBadgeMaterial.uniforms.uAlpha,
              { value: 0 },
              { value: 1, duration: 0.25, overwrite: true, ease: BACK_1_OUT },
            );
            achievementVideoTexture.currentTime = 0;
            achievementVideoTexture.play();
          },
          onComplete: () => {
            if (!videoMeshRef.current) return;
            gsap.fromTo(
              achievementBadgeMaterial.uniforms.uAlpha,
              { value: 1 },
              {
                value: 0,
                delay: 4.1,
                duration: 0.25,
                overwrite: true,
                ease: BACK_1_OUT,
              },
            );
            gsap.to(videoMeshRef.current.scale, {
              x: 0,
              y: 0,
              z: 0,
              delay: 4,
              overwrite: true,
              ease: BACK_1_OUT,
              onComplete: () => {
                setActiveAchievementBadge(null);
                isPlayingRef.current = false;
              },
            });
          },
        },
      );
    }, [
      activeAchievementBadge,
      achievementVideoTexture,
      achievementBadgeMaterial,
      setActiveAchievementBadge,
    ]);

  const handleUpBadgeAtlasOnFrame = useCallback(
    (state: RootState, delta: number) => {
      if (!videoMeshRef.current) return;
      if (!achievementVideoTexture) return;

      videoMeshRef.current.position.copy(state.camera.position);
      videoMeshRef.current.position.addScaledVector(
        state.camera.getWorldDirection(new Vector3()),
        0.3,
      );

      videoMeshRef.current.lookAt(state.camera.position);
      videoMeshRef.current.quaternion.copy(state.camera.quaternion);

      if (
        !radialSwitchRef.current &&
        achievementVideoTexture.currentTime > 2.1
      ) {
        radialSwitchRef.current = true;
        handleRadialMask();
      }

      // @ts-ignore
      if (achievementVideoTexture.currentTime <= 0.125) {
        radialSwitchRef.current = false;
        achievementBadgeMaterial.uniforms.uTime.value = -1;
      }
    },
    [handleRadialMask, achievementVideoTexture, achievementBadgeMaterial],
  );

  // Update
  useFrame(handleUpBadgeAtlasOnFrame);

  // Listeners
  useEffect(handleUpdateBadgeAtlas, [
    activeAchievementBadge,
    handleUpdateBadgeAtlas,
  ]);

  useEffect(() => {
    achievementVideoTexture?.play();
  }, [achievementVideoTexture]);

  return (
    <mesh
      scale={0}
      ref={videoMeshRef}
      geometry={achievementBadgeGeometry}
      material={achievementBadgeMaterial}
    />
  );
};

export default memo(ScreenSpace);
