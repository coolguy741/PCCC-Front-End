import { PlaneGeometry, Vector2, Vector3 } from "three";

const gardenBlue = new Vector3(0, 0.75, 0);
const gardenGreen = new Vector3(0.25, 0.75, 0);
const gardenOrange = new Vector3(0.5, 0.75, 0);
const gardenRed = new Vector3(0.75, 0.75, 0);

const kitchenBlue = new Vector3(0, 0.5, 0.5);
const kitchenGreen = new Vector3(0.25, 0.5, 0.5);
const kitchenOrange = new Vector3(0.5, 0.5, 0.5);
const kitchenRed = new Vector3(0.75, 0.5, 0.5);

const achievementBadgeGeometry = new PlaneGeometry(1, 1, 1, 1);

const vertexShader = /* glsl */ `
  precision highp float;
  uniform mat4 projectionMatrix;
  uniform mat4 modelViewMatrix;

  attribute vec2 uv;
  attribute vec3 position;

  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    vUv = uv;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  
  uniform float uAlpha;
  uniform float uTime;
  uniform vec2 uIconCell;
  uniform vec2 uTextCell;
  uniform sampler2D uIcons;
  uniform float uIconScale;
  uniform float uTextScale;
  uniform vec3 uBadgeParams;
  uniform sampler2D uEngText;
  uniform vec2 uIconCellOffset;
  uniform vec2 uTextCellOffset;
  uniform sampler2D uVideoTexture;

  varying vec2 vUv;
  varying vec3 vPos;

  float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  } 

  void main() {
    float badgeAlphaMask = texture2D(uVideoTexture, vec2(vUv.x / 2.0 + uBadgeParams.z, vUv.y / 2.0)).r;

    vec3 badgeColorMask = texture2D(uVideoTexture, vec2(vUv.x / 4.0 + uBadgeParams.x, vUv.y / 4.0 + uBadgeParams.y)).rgb;

    float dist = length(vUv - 0.5);
    float radialGradientRadius = 0.3 * sin(uTime);
    float radialGradient = 1.0 - smoothstep(radialGradientRadius, radialGradientRadius + 0.05, dist);

    float topFade = 1.0 - pow(vUv.y + 0.005, 30.0);
    float bottomFade = 1.0 - pow(abs(vUv.y - 1.005), 30.0);
    float sideFades = 1.0 - pow(abs(vUv.x * 2.0625 - 1.03125), 20.0);

    vec2 offsetIconPos = uIconCellOffset * 0.1725;
    
    vec2 iconGridDimensions = vec2(7.0, 7.0);
    vec2 iconCellSize = vec2(1.0) / iconGridDimensions;
    
    vec2 scaledIconCellSize = iconCellSize / uIconScale;

    vec2 adjustedIconUv = vUv - vec2(0.5);
    
    adjustedIconUv *= uIconScale;
    
    vec2 cellCenter = (uIconCell + vec2(0.5) + uIconCellOffset) * iconCellSize - vec2(0.5);
    
    adjustedIconUv = adjustedIconUv + cellCenter + vec2(0.5);

    float iconGridMaskX = step(-scaledIconCellSize.x / 2.0, vPos.x + offsetIconPos.x) - step(scaledIconCellSize.x / 2.0, vPos.x + offsetIconPos.x);
    float iconGridMaskY = step(-scaledIconCellSize.y / 2.0, vPos.y + offsetIconPos.y) - step(scaledIconCellSize.y / 2.0, vPos.y + offsetIconPos.y);

    vec4 iconTexture = texture2D(uIcons, adjustedIconUv);

    vec2 offsetTextPos = uTextCellOffset * 0.105;
    
    vec2 textGridDimensions = vec2(4.0, 14.0);
    vec2 textCellSize = vec2(1.0) / textGridDimensions;
    
    vec2 scaledTextCellSize = textCellSize / uTextScale;

    vec2 adjustedTextUv = vUv - vec2(0.5);
    
    adjustedTextUv *= uTextScale;
    
    vec2 textCellCenter = (uTextCell + vec2(0.5) + uTextCellOffset) * textCellSize - vec2(0.5);
    
    adjustedTextUv = adjustedTextUv + textCellCenter + vec2(0.5);

    float textGridMaskX = step(-scaledTextCellSize.x / 2.0, vPos.x + offsetTextPos.x) - step(scaledTextCellSize.x / 2.0, vPos.x + offsetTextPos.x);
    float textGridMaskY = step(-scaledTextCellSize.y / 2.0, vPos.y + offsetTextPos.y) - step(scaledTextCellSize.y / 2.0, vPos.y + offsetTextPos.y);

    vec4 textTexture = texture2D(uEngText, adjustedTextUv);

    float finalAlpha; 
    finalAlpha = topFade * bottomFade * sideFades * badgeAlphaMask;

    vec3 finalColor; 
    finalColor = mix(badgeColorMask, iconTexture.rgb, iconTexture.a * iconGridMaskX * iconGridMaskY * radialGradient * map(uTime, -1.0, 1.0, 0.0, 1.0));
    finalColor = mix(finalColor, vec3(1.0), textTexture.a * textGridMaskX * textGridMaskY * radialGradient * map(uTime, -1.0, 1.0, 0.0, 1.0));

    gl_FragColor = vec4(finalColor, finalAlpha * uAlpha);
}
`;

const achievementAtlasDataMap = {
  big_brain: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(0.0, 6.0),
    iconCellOffset: new Vector2(0.0075, -0.375),
    textCell: new Vector2(0.0, 13),
    textCellOffset: new Vector2(0.0, 1.07),
  },
  blueberry_harvest: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(1.0, 6.0),
    iconCellOffset: new Vector2(0.0, -0.3),
    textCell: new Vector2(1.0, 13),
    textCellOffset: new Vector2(-0.005, 1.06),
  },
  careful_cook: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenGreen.clone(),
    iconCell: new Vector2(3.0, 6.0),
    iconCellOffset: new Vector2(0.02, -0.35),
    textCell: new Vector2(2.0, 13),
    textCellOffset: new Vector2(-0.005, 1.1),
  },
  careful_grower: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(3.0, 6.0),
    iconCellOffset: new Vector2(0.015, -0.35),
    textCell: new Vector2(3.0, 13),
    textCellOffset: new Vector2(-0.005, 1.075),
  },
  carrot_harvest: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(4.0, 6.0),
    iconCellOffset: new Vector2(0, -0.375),
    textCell: new Vector2(0.0, 12),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  clean_cook: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(5.0, 6.0),
    iconCellOffset: new Vector2(0.0, -0.375),
    textCell: new Vector2(1.0, 12),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  clean_grower: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(5.0, 6.0),
    iconCellOffset: new Vector2(0.0, -0.375),
    textCell: new Vector2(2.0, 12),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  clean_slate: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenBlue.clone(),
    iconCell: new Vector2(0.0, 5.0),
    iconCellOffset: new Vector2(0.0125, -0.375),
    textCell: new Vector2(3.0, 12),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  clean_sweep: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(1.0, 5.0),
    iconCellOffset: new Vector2(0.04, -0.35),
    textCell: new Vector2(0.0, 11),
    textCellOffset: new Vector2(-0.005, 1.07),
  },
  confident_cook: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(2.0, 5.0),
    iconCellOffset: new Vector2(0.0125, -0.35),
    textCell: new Vector2(1.0, 11),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  confident_grower: {
    iconScale: 0.9,
    textScale: 0.65,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(3.0, 5.0),
    iconCellOffset: new Vector2(0.0125, -0.35),
    textCell: new Vector2(2.0, 11),
    textCellOffset: new Vector2(-0.005, 1.2),
  },
  creative_cook: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(4.0, 5.0),
    iconCellOffset: new Vector2(0.0125, -0.385),
    textCell: new Vector2(3.0, 11),
    textCellOffset: new Vector2(-0.005, 1.08),
  },
  creative_grower: {
    iconScale: 0.9,
    textScale: 0.625,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(5.0, 5.0),
    iconCellOffset: new Vector2(0, -0.385),
    textCell: new Vector2(0.0, 10),
    textCellOffset: new Vector2(-0.005, 1.125),
  },
  curious_grower: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(6.0, 5.0),
    iconCellOffset: new Vector2(-0.0125, -0.385),
    textCell: new Vector2(1.0, 10),
    textCellOffset: new Vector2(-0.005, 1.095),
  },
  dirt_ditcher: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(0.0, 4.0),
    iconCellOffset: new Vector2(0, -0.385),
    textCell: new Vector2(2.0, 10),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  experimentation_nation: {
    iconScale: 0.9,
    textScale: 0.65,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(1.0, 4.0),
    iconCellOffset: new Vector2(-0.0125, -0.385),
    textCell: new Vector2(3.0, 10),
    textCellOffset: new Vector2(-0.005, 1.16),
  },
  food_safety_savant: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(2.0, 4.0),
    iconCellOffset: new Vector2(0.01, -0.385),
    textCell: new Vector2(0.0, 9.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  functional_fashion: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(3.0, 4.0),
    iconCellOffset: new Vector2(0.01, -0.36),
    textCell: new Vector2(1.0, 9.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  functional_fit: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenGreen.clone(),
    iconCell: new Vector2(4.0, 4.0),
    iconCellOffset: new Vector2(0.012, -0.39),
    textCell: new Vector2(2.0, 9.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  garden_explorer: {
    iconScale: 0.9,
    textScale: 0.62,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(5.0, 4.0),
    iconCellOffset: new Vector2(-0.025, -0.35),
    textCell: new Vector2(3.0, 9.0),
    textCellOffset: new Vector2(-0.005, 1.125),
  },
  garden_genius: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(6.0, 4.0),
    iconCellOffset: new Vector2(0.0125, -0.39),
    textCell: new Vector2(0.0, 8.0),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  garden_zen: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(0.0, 3.0),
    iconCellOffset: new Vector2(0.0, -0.4),
    textCell: new Vector2(1.0, 8.0),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  green_thumb_forever: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenBlue.clone(),
    iconCell: new Vector2(1.0, 3.0),
    iconCellOffset: new Vector2(0.0, -0.37),
    textCell: new Vector2(2.0, 8.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  green_thumb_protector: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(2.0, 3.0),
    iconCellOffset: new Vector2(0.0, -0.37),
    textCell: new Vector2(3.0, 8.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  hygiene_hero: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(3.0, 3.0),
    iconCellOffset: new Vector2(-0.0125, -0.37),
    textCell: new Vector2(0.0, 7.0),
    textCellOffset: new Vector2(-0.005, 1.065),
  },
  itchy_encounter: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(4.0, 3.0),
    iconCellOffset: new Vector2(0.0, -0.37),
    textCell: new Vector2(1.0, 7.0),
    textCellOffset: new Vector2(-0.005, 1.075),
  },
  kitchen_explorer: {
    iconScale: 0.9,
    textScale: 0.62,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(5.0, 3.0),
    iconCellOffset: new Vector2(0.01, -0.41),
    textCell: new Vector2(2.0, 7.0),
    textCellOffset: new Vector2(0, 1.12),
  },
  kitchen_zen: {
    iconScale: 0.88,
    textScale: 0.6,
    badgeParams: kitchenGreen.clone(),
    iconCell: new Vector2(0.0, 2.0),
    iconCellOffset: new Vector2(0.01, -0.41),
    textCell: new Vector2(3.0, 7.0),
    textCellOffset: new Vector2(0, 1.09),
  },
  knife_wielder: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(1.0, 2.0),
    iconCellOffset: new Vector2(-0.0125, -0.37),
    textCell: new Vector2(0.0, 6.0),
    textCellOffset: new Vector2(0, 1.07),
  },
  kitchen_knower: {
    iconScale: 0.84,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(6.0, 3.0),
    iconCellOffset: new Vector2(0.025, -0.39),
    textCell: new Vector2(1.0, 6.0),
    textCellOffset: new Vector2(0, 1.09),
  },
  knowledge_finder: {
    iconScale: 0.84,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(2.0, 2.0),
    iconCellOffset: new Vector2(0.0125, -0.3),
    textCell: new Vector2(0.0, 5.0),
    textCellOffset: new Vector2(0, 1.06),
  },
  master_cook: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenRed.clone(),
    iconCell: new Vector2(3.0, 2.0),
    iconCellOffset: new Vector2(-0.01, -0.37),
    textCell: new Vector2(1.0, 5.0),
    textCellOffset: new Vector2(0, 1.06),
  },
  master_grower: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenRed.clone(),
    iconCell: new Vector2(4.0, 2.0),
    iconCellOffset: new Vector2(-0.01, -0.37),
    textCell: new Vector2(2.0, 5.0),
    textCellOffset: new Vector2(0, 1.06),
  },
  mise_en_place: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(5.0, 2.0),
    iconCellOffset: new Vector2(-0.0125, -0.37),
    textCell: new Vector2(3.0, 5.0),
    textCellOffset: new Vector2(0, 1.06),
  },
  nature_protector: {
    iconScale: 0.8,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(6.0, 2.0),
    iconCellOffset: new Vector2(0.0, -0.34),
    textCell: new Vector2(0.0, 4.0),
    textCellOffset: new Vector2(-0.005, 1.06),
  },
  recipe_reciter: {
    iconScale: 0.81,
    textScale: 0.6,
    badgeParams: kitchenOrange.clone(),
    iconCell: new Vector2(0.0, 1.0),
    iconCellOffset: new Vector2(0.0, -0.33),
    textCell: new Vector2(1.0, 4.0),
    textCellOffset: new Vector2(-0.005, 1.06),
  },
  solid_ground: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenGreen.clone(),
    iconCell: new Vector2(1.0, 1.0),
    iconCellOffset: new Vector2(-0.015, -0.37),
    textCell: new Vector2(2.0, 4.0),
    textCellOffset: new Vector2(-0.005, 1.06),
  },
  sunshine_safety: {
    iconScale: 0.9,
    textScale: 0.61,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(2.0, 1.0),
    iconCellOffset: new Vector2(0.0, -0.36),
    textCell: new Vector2(3.0, 4.0),
    textCellOffset: new Vector2(-0.005, 1.12),
  },
  team_titan: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenGreen.clone(),
    iconCell: new Vector2(3.0, 1.0),
    iconCellOffset: new Vector2(0.0, -0.36),
    textCell: new Vector2(0.0, 3.0),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  tidy_tools: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenBlue.clone(),
    iconCell: new Vector2(4.0, 1.0),
    iconCellOffset: new Vector2(0.0125, -0.35),
    textCell: new Vector2(1.0, 3.0),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  tidy_zone: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(5.0, 1.0),
    iconCellOffset: new Vector2(0.0, -0.35),
    textCell: new Vector2(2.0, 3.0),
    textCellOffset: new Vector2(-0.005, 1.09),
  },
  tomato_harvest: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenOrange.clone(),
    iconCell: new Vector2(6.0, 1.0),
    iconCellOffset: new Vector2(0.0125, -0.35),
    textCell: new Vector2(3.0, 3.0),
    textCellOffset: new Vector2(0, 1.09),
  },
  under_control: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: kitchenBlue.clone(),
    iconCell: new Vector2(0.0, 0.0),
    iconCellOffset: new Vector2(0.0, -0.39),
    textCell: new Vector2(0.0, 2.0),
    textCellOffset: new Vector2(0, 1.09),
  },
  wild_harvest: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(1.0, 0.0),
    iconCellOffset: new Vector2(-0.0125, -0.39),
    textCell: new Vector2(1.0, 2.0),
    textCellOffset: new Vector2(0, 1.09),
  },
  work_smarter_not_harder: {
    iconScale: 0.9,
    textScale: 0.6,
    badgeParams: gardenGreen.clone(),
    iconCell: new Vector2(2.0, 0.0),
    iconCellOffset: new Vector2(0.02, -0.35),
    textCell: new Vector2(2.0, 2.0),
    textCellOffset: new Vector2(0, 1.065),
  },
};

export {
  achievementAtlasDataMap,
  achievementBadgeGeometry,
  vertexShader,
  fragmentShader,
};
