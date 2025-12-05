"use client";

import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import { ComponentProps, FocusEvent, MouseEvent, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "nav";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type AnchorButtonProps = BaseProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    href: string;
  };

type RegularButtonProps = BaseProps &
  Omit<ComponentProps<"button">, "className"> & {
    href?: undefined;
  };

type SoundButtonProps = AnchorButtonProps | RegularButtonProps;

function getVariantClass(variant: Variant = "primary") {
  switch (variant) {
    case "outline":
      return "rounded-full border border-slate-200 bg-white/80 text-slate-800 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800";
    case "ghost":
      return "rounded-full border border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900";
    case "nav":
      return "rounded-full px-3 py-1 text-sm font-medium text-slate-600 hover:bg-sky-50 hover:text-sky-700";
    default:
      return "rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-blue-500 text-white shadow-lg shadow-fuchsia-900/40 hover:scale-[1.02]";
  }
}

function useSoundHandlers(
  playHover: () => void,
  playClick: () => void,
  userHandlers: {
    onMouseEnter?: (event: MouseEvent<Element>) => void;
    onFocus?: (event: FocusEvent<Element>) => void;
    onClick?: (event: MouseEvent<Element>) => void;
  },
) {
  return {
    onMouseEnter: (event: MouseEvent<Element>) => {
      userHandlers.onMouseEnter?.(event);
      if (!event.defaultPrevented) playHover();
    },
    onFocus: (event: FocusEvent<Element>) => {
      userHandlers.onFocus?.(event);
      if (!event.defaultPrevented) playHover();
    },
    onClick: (event: MouseEvent<Element>) => {
      userHandlers.onClick?.(event);
      if (!event.defaultPrevented) playClick();
    },
  };
}

export function SoundButton(props: SoundButtonProps) {
  const { children, className = "", variant = "primary", ...rest } = props;
  const { playHover, playClick } = useSound();

  const sharedClassNames = `inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:scale-[0.99] ${getVariantClass(variant)} ${className}`;

  if ("href" in rest) {
    const { href, onMouseEnter, onFocus, onClick, ...anchorProps } = rest;
    const mergedHandlers = useSoundHandlers(playHover, playClick, {
      onMouseEnter,
      onFocus,
      onClick,
    });

    return (
      <Link href={href} className={sharedClassNames} {...anchorProps} {...mergedHandlers}>
        {children}
      </Link>
    );
  }

  const { onMouseEnter, onFocus, onClick, ...buttonProps } = rest as RegularButtonProps;
  const mergedHandlers = useSoundHandlers(playHover, playClick, { onMouseEnter, onFocus, onClick });

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={sharedClassNames}
      {...buttonProps}
      {...mergedHandlers}
    >
      {children}
    </button>
  );
}
