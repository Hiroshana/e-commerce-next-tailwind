import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5  h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com",
    icon: <Github className="w-5  h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5  h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5  h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.slack.com",
    icon: <Slack className="w-5  h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="Hiro - Samath IT Solutions"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop-green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-shop-dark-color text-xs font-semibold py-1 px-3 border border-shop-green rounded-2xl",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
