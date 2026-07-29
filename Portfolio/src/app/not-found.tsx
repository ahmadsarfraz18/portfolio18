import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="space-y-6">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-8">
          <Link 
            href="/"
            className="group inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:bg-foreground/90 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] active:scale-95"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
