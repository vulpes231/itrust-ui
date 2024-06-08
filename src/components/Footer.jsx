import React from "react";

const Footer = () => {
  return (
    <footer className="isolate relative py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="container px-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-200">
            © 2024. Crafted By&nbsp;
            <a
              className="text-slate-700 dark:text-white hover:text-blue-600 hover:dark:text-blue-600 transition-all"
              // href="https://themeforest.net/user/themeyn/portfolio"
              target="_blank"
            >
              Vulpescode
            </a>
          </p>
          <ul className="-mx-3 flex flex-wrap">
            <li>
              <a
                className="px-3 text-sm font-medium text-slate-600 dark:text-slate-200 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                href="/login"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                className="px-3 text-sm font-medium text-slate-600 dark:text-slate-200 hover:text-blue-600 hover:dark:text-blue-600 transition-all"
                href="/app/faq"
              >
                Faq
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <small className="text-center">
        Quadx.io 2024 &copy; All Rights Reserved.
      </small> */}
    </footer>
  );
};

export default Footer;
