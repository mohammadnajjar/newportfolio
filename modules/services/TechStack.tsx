'use client'

import { useState } from 'react'
import type { ReactElement } from 'react'

const filters = [
  { id: 'all',      label: 'All' },
  { id: 'arch',     label: 'Architecture' },
  { id: 'backend',  label: 'Backend Development' },
  { id: 'database', label: 'Database' },
  { id: 'devops',   label: 'DevOps' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'lang',     label: 'Programming Language' },
]

const logos: Record<string, ReactElement> = {
  '.Net Core': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 8H6L3 15.5h1.5L5 14h3l.5 1.5H10L8 8zm-2.5 4.5 1-3 1 3h-2zM10 8v7.5h5.5V14H11.5v-1.5H15v-1.5h-3.5V9.5H15.5V8H10zM17 8v7.5h1.5V12l3 3.5H23V8h-1.5v3.5L18.5 8H17z" fill="currentColor"/>
    </svg>
  ),
  'AWS': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.347.347 0 0 1 .056.183c0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.382-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.486-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.279 0-.567.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 7.5c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.321c-.048.16-.104.264-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08h-.687zm10.138.215a5.1 5.1 0 0 1-1.19-.143c-.383-.096-.679-.2-.878-.32-.12-.071-.2-.151-.224-.224a.56.56 0 0 1-.04-.216v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.503 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.533-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.329.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z" fill="#FF9900"/>
    </svg>
  ),
  'Angular': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.25L2.25 5.75l1.5 13 8.25 4.5 8.25-4.5 1.5-13L12 2.25z" fill="#DD0031"/>
      <path d="M12 2.25V22.5l8.25-4.5 1.5-13L12 2.25z" fill="#C3002F"/>
      <path d="M12 5.5L7.25 16.5h1.75l.95-2.375h4.1l.95 2.375H16.75L12 5.5zm0 3.25l1.5 3.875h-3L12 8.75z" fill="white"/>
    </svg>
  ),
  'Azure': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.05 4.24L6.56 18.05l5.11.86-4.8-5.04L13.05 4.24z" fill="#0072C6"/>
      <path d="M13.41 4.41L17.44 19.2H6.56l6.85-1.15-4.57-4.77L13.41 4.41z" fill="#0072C6"/>
      <path d="M13.05 4.24l4.39 14.96H6.56l.75-.13 5.11-5.36-4.8-5.04 5.43-9.43z" fill="#1EAEF4"/>
    </svg>
  ),
  'Django': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 2H14v13.5c-3.5.65-6.5-.25-6.5-4S10 7 10 7V4.5c0-.5-.5-1-1-1H7.5V2H11.5z" fill="#092E20"/>
      <path d="M14 2h2.5v5.5H14V2zM14 9h2.5v5.5C16.5 18 13 20 9.5 20c-2.5 0-4.5-.75-5.5-2.5h2.25C7 18.5 8.25 19 9.5 19c2.5 0 4.5-1.5 4.5-4.5V9z" fill="#092E20"/>
    </svg>
  ),
  'Docker': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 10h-2V8h2v2zm-3 0h-2V8h2v2zm-3 0h-2V8h2v2zm6-3h-2V5h2v2zm-3 0h-2V5h2v2zm0-3h-2V2h2v2z" fill="#2496ED"/>
      <path d="M22.5 10.5s-.75-1.5-2.5-1.5c-.5-2-2.5-3-5-3H2.5S2 8.5 3 10.5c-1 .5-1.5 1.5-1.5 2.5 0 2.5 2 4.5 4.5 4.5h12c2.5 0 4.5-2 4.5-4.5 0-.75-.25-1.5-.5-2.5z" fill="#2496ED"/>
    </svg>
  ),
  'Firebase': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.53 11.48L8.27 2.2a.5.5 0 0 1 .94-.04l2.02 3.84L5.53 11.48z" fill="#FFA000"/>
      <path d="M14.55 8.2l-1.5-2.86a.5.5 0 0 0-.9.01L5.53 11.48 14.55 8.2z" fill="#F57C00"/>
      <path d="M18.45 14.26l-1.24-7.7a.5.5 0 0 0-.87-.24l-10.81 9.16 6.01 3.37a1.25 1.25 0 0 0 1.22 0l5.69-4.59z" fill="#FFCA28"/>
      <path d="M5.53 11.48l-1 4.04 6.01 3.37L5.53 11.48z" fill="#FFA000"/>
    </svg>
  ),
  'Flutter': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.23 0L2 12.23l3.56 3.56L21.79 0h-7.56z" fill="#54C5F8"/>
      <path d="M14.23 11.37L8.6 17l3.55 3.54 1.77-1.77 5.18-5.17-4.87-2.23z" fill="#54C5F8"/>
      <path d="M8.6 17l3.55 3.54 1.77-1.77L10.37 15.2 8.6 17z" fill="#01579B"/>
      <path d="M10.37 15.2l3.55 3.54 5.18-5.17-4.87-2.23-3.86 3.86z" fill="#29B6F6"/>
    </svg>
  ),
  'Google Cloud': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5l2.52.02 1.48-1.49H12C8.42 5.03 5.5 7.96 5.5 11.5c0 .98.23 1.91.63 2.73l1.81-1.81c-.12-.3-.19-.63-.19-.97A4.6 4.6 0 0 1 12 6.5z" fill="#4285F4"/>
      <path d="M12 17.5a4.59 4.59 0 0 1-4.28-2.91L5.9 16.4A7.47 7.47 0 0 0 12 19.97c1.93 0 3.69-.73 5.01-1.93l-1.8-1.8A4.52 4.52 0 0 1 12 17.5z" fill="#34A853"/>
      <path d="M18.5 11.5c0-.31-.04-.62-.09-.91H12v2h3.69a3.23 3.23 0 0 1-1.48 2.07l1.8 1.8c1.08-1.01 1.75-2.51 1.75-4.26a5.6 5.6 0 0 0-.26-1.7z" fill="#4285F4"/>
      <path d="M7.94 12.44l-1.81 1.81c.4.81.97 1.54 1.66 2.13l1.81-1.81a4.54 4.54 0 0 1-1.66-2.13z" fill="#FBBC05"/>
      <path d="M16.03 7.04L14.52 8.55A4.56 4.56 0 0 1 12 6.5c-1.28 0-2.43.52-3.27 1.37L7.17 6.31A7.48 7.48 0 0 1 12 5.03c1.48 0 2.85.43 4.03 1.01z" fill="#EA4335"/>
    </svg>
  ),
  'GraphQL': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#E535AB" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="2" r="1.5" fill="#E535AB"/>
      <circle cx="21" cy="7" r="1.5" fill="#E535AB"/>
      <circle cx="21" cy="17" r="1.5" fill="#E535AB"/>
      <circle cx="12" cy="22" r="1.5" fill="#E535AB"/>
      <circle cx="3" cy="17" r="1.5" fill="#E535AB"/>
      <circle cx="3" cy="7" r="1.5" fill="#E535AB"/>
      <line x1="3" y1="7" x2="21" y2="17" stroke="#E535AB" strokeWidth="1"/>
      <line x1="3" y1="17" x2="21" y2="7" stroke="#E535AB" strokeWidth="1"/>
    </svg>
  ),
  'Java': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.85 16.85s-.5.3.35.4c1.02.12 1.55.1 2.68-.1 0 0 .3.18.71.35-2.52.54-5.7-.03-3.74-.65zM8.5 15.1s-.56.42.3.5c1.1.1 1.96.11 3.46-.15 0 0 .2.21.53.32-3.06.56-6.47.05-4.29-.67z" fill="#5382A1"/>
      <path d="M11.45 11.57c.62.72-.16 1.36-.16 1.36s1.58-.81.85-1.83c-.68-.95-1.2-1.43 1.62-3.07 0 0-4.43 1.1-2.31 3.54z" fill="#E76F00"/>
      <path d="M14.88 17.93s.37.3-.41.54c-1.48.44-6.16.58-7.46.02-.47-.2.4-.49.68-.54.28-.05.44-.04.44-.04-.5-.36-3.27.7-1.4.99 5.08.82 9.27-.37 8.15-.97z" fill="#5382A1"/>
      <path d="M9.15 13.4s-2.32.55-1.82 1.32c.44.7 4.57.68 5.67.23l-3.85-1.55z" fill="#5382A1"/>
      <path d="M16.87 19.8c0-.01-3.7.92-7.87.43-2.32-.27-2.33-.95-2.33-1.02 0-.56.7-.83.7-.83s-1.82.3-1.82 1.34c0 1.24 4.34 1.65 7.5 1.03 1.94-.38 3.82-1 3.82-1.95z" fill="#5382A1"/>
      <path d="M9.5 8.56S7.27 9.1 8.15 10.2c.42.53 1.25.5 2.07.54.73.03 1.47-.03 1.47-.03s-.25.1-.43.23c-1.74.46-5.1.25-4.13-.5C7.9 9.7 9.5 8.56 9.5 8.56z" fill="#5382A1"/>
      <path d="M15.92 16.9c1.77-.95 1.95-2.1 1.95-2.1s-.32 1.7-1.95 2.4c-1.75.75-3.58.6-3.58.6s.9-.14 3.58-.9z" fill="#E76F00"/>
    </svg>
  ),
  'Kotlin': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kotlin-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7F52FF"/>
          <stop offset="50%" stopColor="#C811E1"/>
          <stop offset="100%" stopColor="#E8491B"/>
        </linearGradient>
      </defs>
      <path d="M2 2h10l10 10-10 10H2V2z" fill="url(#kotlin-g)"/>
      <path d="M2 2l10 10L2 22V2z" fill="url(#kotlin-g)"/>
    </svg>
  ),
  'Kubernetes': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9.5 5.25v10.5L12 23l-9.5-5.25V7.25L12 2z" stroke="#326CE5" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="#326CE5"/>
      <line x1="12" y1="2" x2="12" y2="9" stroke="#326CE5" strokeWidth="1.2"/>
      <line x1="12" y1="15" x2="12" y2="22" stroke="#326CE5" strokeWidth="1.2"/>
      <line x1="21.5" y1="7.25" x2="15.2" y2="10.5" stroke="#326CE5" strokeWidth="1.2"/>
      <line x1="8.8" y1="13.5" x2="2.5" y2="16.75" stroke="#326CE5" strokeWidth="1.2"/>
      <line x1="21.5" y1="16.75" x2="15.2" y2="13.5" stroke="#326CE5" strokeWidth="1.2"/>
      <line x1="8.8" y1="10.5" x2="2.5" y2="7.25" stroke="#326CE5" strokeWidth="1.2"/>
    </svg>
  ),
  'Laravel': (
    <svg viewBox="0 0 50 52" width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001L10.42.232c.248-.143.553-.143.8 0l10.45 6.034h.001c.033.02.06.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.615V11.773c0-.072.01-.143.028-.209.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l10.451-6.033c.248-.143.552-.143.8 0l10.45 6.033c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.016.024.039.045.054.071.022.039.036.082.05.124.008.023.022.044.03.068zm-1.572 10.701v-9.423l-3.369 1.944-4.638 2.671v9.423l8.007-4.615zm-9.61 16.505v-9.428l-4.57 2.607-13.05 7.432v9.522l17.62-10.133zM1.602 7.719v31.53l17.619 10.134v-9.522l-9.2-5.238-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.013-.078-.016-.117-.003-.035-.01-.07-.009-.106v-.001-21.483L8.023 9.974l-6.42-3.702v1.447zm9.014-5.198L2.607 7.133l8.009 4.617 8.009-4.617-8.009-4.612zm4.387 27.347l4.638-2.671V7.719l-3.369 1.945-4.638 2.671v19.478l3.369-1.945zM39.623 7.133l-8.008 4.617 8.008 4.617 8.008-4.617-8.008-4.617zm-.801 10.693l-4.638-2.671-3.369-1.945v9.423l4.638 2.671 3.369 1.944v-9.422zM20.021 38.827l11.093-6.332 5.545-3.165-8-4.612-9.211 5.303-8.395 4.836 8.968 3.97z" fill="#FF2D20"/>
    </svg>
  ),
  'MongoDB': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.5 2 6 6 6 9.5c0 3.2 1.8 5.8 4.5 7l.5.3v3.2h2V16.8l.5-.3C16.2 15.3 18 12.7 18 9.5 18 6 15.5 2 12 2z" fill="#47A248"/>
      <path d="M12 2v20" stroke="#47A248" strokeWidth="1" opacity=".3"/>
    </svg>
  ),
  'Nest.js': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.13 2.25a2.2 2.2 0 0 0-1.93.11L5.7 6.43A4.4 4.4 0 0 0 3.5 10.2v6.6a4.4 4.4 0 0 0 2.2 3.8l6.5 3.76a4.4 4.4 0 0 0 4.4 0l3.2-1.85A4.4 4.4 0 0 0 22 18.7V9.03a2.2 2.2 0 0 0-1.1-1.91L14.13 2.25z" fill="#E0234E"/>
      <path d="M8 10c1.5-2 4-3 7-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14c1.5 2 4 3 7 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="black"/>
      <path d="M9 8.5v7l7-7v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'PWA': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5h18v14H3z" rx="2" stroke="#5A0FC8" strokeWidth="1.5" fill="none"/>
      <path d="M7 12l2 4 2-6 2 4 2-4" stroke="#5A0FC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="6" r="3" fill="#5A0FC8"/>
      <path d="M17 6l.8.8L19.5 5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="7" ry="3.5" stroke="#336791" strokeWidth="1.5" fill="none"/>
      <path d="M5 6v5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5V6" stroke="#336791" strokeWidth="1.5" fill="none"/>
      <path d="M5 11v5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-5" stroke="#336791" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9 2 7 3.5 7 5.5V9h5v1H5.5C3.5 10 2 11.5 2 14s1.5 5 5 5h1v-3c0-2 2-3.5 4-3.5s4 1.5 4 3.5v3h1c3.5 0 5-2.5 5-5S18.5 10 16.5 10H13V9h5V5.5C18 3.5 16 2 13 2h-1z" fill="#3776AB"/>
      <path d="M12 2C9 2 7 3.5 7 5.5V9h5v1H5.5C3.5 10 2 11.5 2 14s1.5 5 5 5h1v-3c0-2 2-3.5 4-3.5s4 1.5 4 3.5v3h1c3.5 0 5-2.5 5-5S18.5 10 16.5 10H13V9h5V5.5C18 3.5 16 2 13 2h-1z" fill="#FFD43B" opacity=".4"/>
      <circle cx="10" cy="5.5" r="1" fill="white"/>
      <circle cx="14" cy="18.5" r="1" fill="white"/>
    </svg>
  ),
  'Redis': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5.5L5 8.5l7 3 7-3-7-3z" fill="#D82C20"/>
      <path d="M5 8.5v4L12 16l7-3.5v-4L12 12 5 8.5z" fill="#D82C20" opacity=".7"/>
      <path d="M5 12.5v3.5L12 20l7-4v-3.5L12 16l-7-3.5z" fill="#D82C20" opacity=".5"/>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'SQL Server': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="7" ry="3" fill="#CC2927"/>
      <path d="M5 6v4c0 1.66 3.13 3 7 3s7-1.34 7-3V6c0 1.66-3.13 3-7 3S5 7.66 5 6z" fill="#CC2927" opacity=".8"/>
      <path d="M5 10v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4c0 1.66-3.13 3-7 3s-7-1.34-7-3z" fill="#CC2927" opacity=".6"/>
      <path d="M5 14v4c0 1.66 3.13 3 7 3s7-1.34 7-3v-4c0 1.66-3.13 3-7 3s-7-1.34-7-3z" fill="#CC2927" opacity=".4"/>
    </svg>
  ),
  'Swift': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 14.5c.3-1 .5-2 .5-3.1C20 6.9 16.4 3 12 3c-2 0-3.8.7-5.2 1.9 1.4-.6 3-.9 4.6-.6 2.3.4 4.4 2 5.8 4.1-1.3-1.1-3-1.8-4.7-1.8-3.7 0-6.8 3.5-5.2 7.4.4 1 1 2 1.8 2.8C7.8 18.5 6 19 4 19h-.5C5 20.8 7.5 22 10 22c5 0 9.3-3.4 10-8l-.5.5z" fill="#F05138"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6"/>
      <path d="M13 10h4v2h-1.5v7H14v-7H13v-2z" fill="white"/>
      <path d="M10 12.5c-.8-.2-1.5-.2-1.5.5 0 .6.7.8 1.4 1 1 .4 2 .8 2 2.2 0 1.6-1.2 2-2.4 2-.7 0-1.5-.2-2-.5v-1.7c.5.4 1.2.7 1.9.7.7 0 1-.3 1-.7 0-.6-.7-.8-1.4-1.1C8 14.5 7 14 7 12.7c0-1.5 1.1-2 2.3-2 .6 0 1.2.1 1.7.3v1.5z" fill="white"/>
    </svg>
  ),
}

const stack = [
  { name: '.Net Core',      cats: ['backend'] },
  { name: 'AWS',            cats: ['devops', 'arch'] },
  { name: 'Angular',        cats: ['frontend'] },
  { name: 'Azure',          cats: ['devops', 'arch'] },
  { name: 'Django',         cats: ['backend'] },
  { name: 'Docker',         cats: ['devops'] },
  { name: 'Firebase',       cats: ['backend', 'database'] },
  { name: 'Flutter',        cats: ['frontend'] },
  { name: 'Google Cloud',   cats: ['devops', 'arch'] },
  { name: 'GraphQL',        cats: ['backend', 'arch'] },
  { name: 'Java',           cats: ['lang'] },
  { name: 'Kotlin',         cats: ['lang'] },
  { name: 'Kubernetes',     cats: ['devops'] },
  { name: 'Laravel',        cats: ['backend'] },
  { name: 'MongoDB',        cats: ['database'] },
  { name: 'Nest.js',        cats: ['backend'] },
  { name: 'Next.js',        cats: ['frontend'] },
  { name: 'PWA',            cats: ['frontend'] },
  { name: 'PostgreSQL',     cats: ['database'] },
  { name: 'Python',         cats: ['lang'] },
  { name: 'Redis',          cats: ['database'] },
  { name: 'React',          cats: ['frontend'] },
  { name: 'SQL Server',     cats: ['database'] },
  { name: 'Swift',          cats: ['lang'] },
  { name: 'TypeScript',     cats: ['lang', 'frontend'] },
]

export default function TechStack() {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? stack
    : stack.filter(t => t.cats.includes(active))

  return (
    <div>
      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${active === f.id ? ' active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="tech-stack-grid">
        {visible.map(t => (
          <div key={t.name} className="tech-item">
            {logos[t.name] && <span className="tech-item-logo">{logos[t.name]}</span>}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
