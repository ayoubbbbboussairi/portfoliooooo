import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavLinks from "@/components/common/global/NavLinks";
import { CursorContextProvider } from "@/context/CursorContext";
import {
  app_info,
  dark_theme,
  theme_panel,
  variants_panel,
} from "@/data/config";
import { Analytics } from "@vercel/analytics/next";
import { ProjectContextProvider } from "@/context/ProjectContext";
import ProjectDialog from "@/components/common/projects/ProjectDialog";
import { ServiceContextProvider } from "@/context/ServiceContext";
import { SmoothScrollingProvider } from "@/context/SmoothScrollingProvider";
import { ThemeVariantsContextProvider } from "@/context/ThemeVariantsContext";
import VariantsPanel from "@/components/common/global/panels/VariantsPanel";
import ThemePanel from "@/components/common/global/panels/ThemePanel";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const { title, description } = app_info;

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(dark_theme ? "dark" : "", "")}>
      <body
        className={cn(
          font.className,
          "overflow-x-clip bg-[var(--bg-secondary)] relative"
        )}
      >
        <ThemeVariantsContextProvider>
          <CursorContextProvider>
            <ProjectContextProvider>
              <ServiceContextProvider>
                <ProjectDialog />

                {theme_panel ? <ThemePanel /> : null}
                {variants_panel ? <VariantsPanel /> : null}

                <NavLinks />

                <SmoothScrollingProvider>{children}</SmoothScrollingProvider>
              </ServiceContextProvider>
            </ProjectContextProvider>
          </CursorContextProvider>
        </ThemeVariantsContextProvider>

        <Analytics />
      </body>
    </html>
  );
}
