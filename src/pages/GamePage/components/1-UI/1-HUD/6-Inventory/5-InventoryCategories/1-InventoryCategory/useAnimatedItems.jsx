import { Controller } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
// @ts-ignore
import clamp from "lodash-es/clamp";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NUM_COLS, swap } from "./InventoryCategoryDefines";

const useAnimatedItems = ({ items, itemDimensions }) => {
  const getSpringValue = useCallback(
    ({ position }) => {
      const { width, height } = itemDimensions;
      return {
        x: (position % NUM_COLS) * width,
        y: Math.floor(position / NUM_COLS) * height,
        scale: 1,
        zIndex: "0",
        width,
        height,
      };
    },
    [itemDimensions],
  );

  const [animatedItemsMap, setAnimatedItemsMap] = useState({});
  const orderRef = useRef([]);

  const handleGestureEvent = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleAddGestures = useCallback(() => {
    document.addEventListener("gestureend", handleGestureEvent);
    document.addEventListener("gesturestart", handleGestureEvent);
    document.addEventListener("gesturechange", handleGestureEvent);
  }, [handleGestureEvent]);

  const handleRemoveGestures = useCallback(() => {
    document.removeEventListener("gestureend", handleGestureEvent);
    document.removeEventListener("gesturestart", handleGestureEvent);
    document.removeEventListener("gesturechange", handleGestureEvent);
  }, [handleGestureEvent]);

  useEffect(() => {
    handleAddGestures();
    return handleRemoveGestures;
  }, [handleAddGestures, handleRemoveGestures]);

  useEffect(() => {
    // Filtering any removed items from the order
    const newIds = items.map((item) => item.id);
    orderRef.current = orderRef.current.filter((id) => newIds.includes(id));

    setAnimatedItemsMap((_animatedItemsMap) =>
      items.reduce((acc, { id, ...rest }) => {
        if (_animatedItemsMap[id]) {
          acc[id] = _animatedItemsMap[id];
        } else {
          orderRef.current.push(id);
          const position = orderRef.current.length - 1;
          acc[id] = {
            ...rest,
            controller: new Controller(getSpringValue({ position })),
          };
        }
        return acc;
      }, {}),
    );
  }, [items, getSpringValue]);

  const animatedItems = useMemo(
    () =>
      Object.entries(animatedItemsMap).map(([id, rest]) => ({ id, ...rest })),
    [animatedItemsMap],
  );

  useEffect(() => {
    animatedItems.forEach(({ id, controller }) => {
      const position = orderRef.current.indexOf(id);
      if (position === -1) {
        console.error("oh no!", id);
      }

      // Not using fluid animation on width resize
      const immediate =
        controller.springs?.width?.get() !== itemDimensions.width;
      controller.start({ ...getSpringValue({ position }), immediate });
    });
  }, [itemDimensions, getSpringValue, animatedItems]);

  const move = ({
    args: [draggedId],
    down,
    movement: [movementX, movementY],
  }) => {
    const curPosition = orderRef.current.indexOf(draggedId);
    const x = (curPosition % NUM_COLS) * itemDimensions.width + movementX;
    const y =
      Math.floor(curPosition / NUM_COLS) * itemDimensions.height + movementY;

    const numRows = Math.ceil(orderRef.current.length / NUM_COLS);
    const newPosition =
      clamp(Math.round(x / itemDimensions.width), 0, NUM_COLS - 1) +
      clamp(Math.round(y / itemDimensions.height), 0, numRows - 1) * NUM_COLS;
    const newOrder = swap(orderRef.current, curPosition, newPosition);

    animatedItems.forEach(({ id, controller }) => {
      const position = newOrder.indexOf(id);
      if (position === -1) {
        console.error("oh no!", id);
      }

      controller.start(
        down && id === draggedId
          ? {
              x,
              y,
              scale: 1.1,
              zIndex: "1",
              immediate: (key) => key !== "scale",
            }
          : getSpringValue({ position }),
      );
    });

    if (!down) {
      orderRef.current = newOrder;
    }
  };

  const timer = useRef();
  const shouldDrag = useRef(false);

  const clean = useCallback(() => {
    clearTimeout(timer.current);
    shouldDrag.current = false;
  }, []);

  useEffect(() => {
    const handleTouch = (e) => {
      if (shouldDrag.current) e.preventDefault();
      console.log("should drag");
    };
    window.addEventListener("touchmove", handleTouch, { passive: false });
    return () => {
      window.removeEventListener("touchmove", handleTouch);
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => clean, [clean]);

  const bindGesture = useDrag(
    ({ event, first, last, distance, cancel, ...state }) => {
      // on non touch devices
      if (event.pointerType !== "touch") {
        move(state);
        return;
      }
      // on touch devices
      if (first) {
        timer.current = window.setTimeout(() => {
          console.log("should drag");
          shouldDrag.current = true;
          move(state);
        }, 250);
      } else if (!shouldDrag.current) {
        if (distance > 3) {
          console.log("canceling drag");
          clean();
          !last && cancel();
        }
      } else move(state);
      if (last) clean();
    },
  );

  return { animatedItems, bindGesture };
};

export default useAnimatedItems;
