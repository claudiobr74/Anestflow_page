"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const nav = [["Produto","/produto"],["Recursos","/recursos"],["Segurança","/seguranca"],["Para instituições","/instituicoes"]] as const;

export default function SiteHeader() {
  const [open,setOpen] = useState(false);
  return <header className="header"><div className="container headerIn"><Link className="brand" href="/"><span className="mark">A</span><strong>AnestFlow</strong></Link><nav className="nav">{nav.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}<Link className="btn ghost" href={siteConfig.platformUrl}>Acessar plataforma</Link></nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu"><span/><span/><span/></button></div>{open&&<nav className="mobileNav">{nav.map(([l,h])=><Link onClick={()=>setOpen(false)} key={h} href={h}>{l}</Link>)}<Link className="btn" href={siteConfig.platformUrl}>Acessar plataforma</Link></nav>}</header>;
}
