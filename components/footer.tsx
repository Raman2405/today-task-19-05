import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">
              Discover elegant and custom hair label designs for your brand.
              Premium packaging solutions that make your products stand out.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          <FooterLinks
            title="Quick Links"
            links={[
              { href: "/gallery", label: "Design Gallery" },
              { href: "/categories", label: "Categories" },
              { href: "/designers", label: "Designers" },
              { href: "/pricing", label: "Pricing" },
              { href: "/faq", label: "FAQ" },
            ]}
          />
          
          <FooterLinks
            title="Categories"
            links={[
              { href: "/category/shampoo", label: "Shampoo Labels" },
              { href: "/category/conditioner", label: "Conditioner Labels" },
              { href: "/category/treatments", label: "Hair Treatments" },
              { href: "/category/styling", label: "Styling Products" },
              { href: "/category/sets", label: "Product Sets" },
            ]}
          />
          
          <div className="space-y-4">
            <h3 className="font-medium text-base">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get updates on new designs and trends.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hair Label Designs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-background hover:bg-muted transition-colors"
    >
      {icon}
    </Link>
  );
}

function FooterLinks({ 
  title, 
  links 
}: { 
  title: string; 
  links: { href: string; label: string }[] 
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-base">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}