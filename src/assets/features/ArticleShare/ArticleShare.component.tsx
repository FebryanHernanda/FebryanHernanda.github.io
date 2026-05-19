import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/config/site";
import { shareTranslations, styleConfig } from "./ArticleShare.config";
import { ArticleShareProps } from "./ArticleShare.types";
import { Share2, Link as LinkIcon, Check, MessageCircle, Linkedin, Twitter, X as CloseIcon } from "lucide-react";

export const ArticleShare: React.FC<ArticleShareProps> = ({ title, excerpt, slug }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const t = shareTranslations[language];
  const articleUrl = `${SITE_CONFIG.siteUrl}/articles/${slug}`;

  // Handle click outside to close modal
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Freeze background scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = ""; // Re-enable background scrolling
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.warn("Failed to copy link:", err);
    }
  };

  // Pre-compiled share URLs with dynamically generated author attribution (excluding thoughts text)
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`*${title}* ${t.by} ${t.author}\n${articleUrl}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${t.by} ${t.author}`)}&url=${encodeURIComponent(articleUrl)}`;
  const threadsUrl = `https://threads.net/intent/post?text=${encodeURIComponent(`${title} ${t.by} ${t.author}\n${articleUrl}`)}`;

  return (
    <>
      {/* Sleek Trigger Card */}
      <div className={styleConfig.triggerCard}>
        <p className={styleConfig.triggerText}>
          {t.triggerText}
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className={styleConfig.triggerBtn}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{t.triggerBtn}</span>
        </button>
      </div>

      {/* Modal Dialog Overlay */}
      {isOpen && (
        <div className={styleConfig.backdrop} role="dialog" aria-modal="true">
          <div ref={modalRef} className={styleConfig.modal}>
            
            {/* Header */}
            <div className={styleConfig.header}>
              <h3 className={styleConfig.title}>{t.shareTitle}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className={styleConfig.closeBtn}
                aria-label={t.close}
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Live Snippet Preview */}
            <div className={styleConfig.previewCard}>
              <span className={styleConfig.previewBadge}>ARTICLE PREVIEW</span>
              <h4 className={styleConfig.previewTitle}>{title}</h4>
              <p className={styleConfig.previewAuthor}>
                {t.by} <span className="font-semibold text-neutral-800 dark:text-neutral-200">{t.author}</span>
              </p>
              <p className={styleConfig.previewDesc}>{excerpt}</p>
            </div>

            {/* Copy Row */}
            <div className={styleConfig.copyRow}>
              <input
                type="text"
                readOnly
                value={articleUrl}
                className={styleConfig.copyInput}
              />
              <button
                onClick={handleCopyLink}
                className={styleConfig.copyBtn}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-500 dark:text-emerald-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>{t.copyLink}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Grid */}
            <div className={styleConfig.grid}>
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styleConfig.gridBtn}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styleConfig.gridBtn}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              {/* X / Twitter */}
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styleConfig.gridBtn}
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>

              {/* Threads */}
              <a
                href={threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styleConfig.gridBtn}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
                </svg>
                <span>Threads</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
