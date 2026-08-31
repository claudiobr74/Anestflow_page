import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const paths=["","/produto","/recursos","/seguranca","/instituicoes","/contato","/privacidade"];return paths.map(path=>({url:`${siteConfig.baseUrl}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.8}))}
