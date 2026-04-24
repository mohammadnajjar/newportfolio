import type { ReactElement } from 'react'
import Link from 'next/link'

type HeadlineKey = 'talk' | 'contact' | ''

const headlineMap: Record<HeadlineKey, ReactElement> = {
  talk: (
    <>
      Let&apos;s talk. <span className="serif">I respond</span><br />in hours.
    </>
  ),
  contact: (
    <>
      Message me. <span className="serif">I&apos;ll reply.</span>
    </>
  ),
  '': (
    <>
      Got a project <span className="serif">in mind?</span>
    </>
  ),
}

export default function SiteFooter({ headline = '' }: { headline?: HeadlineKey }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-huge">
              {headlineMap[headline]}
            </div>
            <Link
              href="mailto:mohammadnajjamgl@gmail.com?subject=Project%20Inquiry"
              className="btn-big on-dark"
              style={{ marginTop: '32px', display: 'inline-flex' }}
            >
              Send me a message <span className="arrow">↗</span>
            </Link>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:mohammadnajjamgl@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://linkedin.com/in/mglnaj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://wa.me/971501026045" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://cal.com/mohammadnajjar" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Mohammad Najjar. All rights reserved.</span>
          <span>Dubai, UAE · GMT+4</span>
        </div>
      </div>
    </footer>
  )
}
