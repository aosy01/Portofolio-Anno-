"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import "./Dock.css";

/* =======================
   Types & Interfaces
======================= */

interface SpringConfig {
  mass?: number;
  stiffness?: number;
  damping?: number;
}

interface DockItemProps {
  children: ReactElement | ReactElement[];
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringConfig;
  distance: number;
  magnification: number;
  baseItemSize: number;
}

interface DockLabelProps {
  children: ReactNode;
  className?: string;
  isHovered?: MotionValue<number>;
}

interface DockIconProps {
  children: ReactNode;
  className?: string;
}

export interface DockItemData {
  icon: ReactNode;
  label?: ReactNode;
  onClick?: () => void;
  className?: string;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  spring?: SpringConfig;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

/* =======================
   Dock Item
======================= */

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children as ReactNode, (child) =>
        // only clone React elements (skip strings/null); provide the DockItem's isHovered MotionValue
        // note: TypeScript requires a runtime check before cloneElement
        typeof child === "object" && child !== null && "props" in child
          ? cloneElement(child as ReactElement, { isHovered })
          : child
      )}
    </motion.div>
  );
}

/* =======================
   Dock Label
======================= */

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =======================
   Dock Icon
======================= */

function DockIcon({ children, className = "" }: DockIconProps) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

/* =======================
   Dock (Main Component)
======================= */

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue<number>(Infinity);
  const isHovered = useMotionValue<number>(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="dock-outer"
    >
      <motion.div
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          isHovered.set(1);
          // use pageX to align with motion value expectations
          // React's synthetic event exposes pageX
          mouseX.set(e.pageX as unknown as number);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
