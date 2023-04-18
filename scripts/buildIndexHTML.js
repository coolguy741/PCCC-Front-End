const fs = require("fs/promises");
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), "./.site") });

async function main() {
  console.log(
    "Tip: Use https://favicon.io/favicon-converter/ to generate icons. Place them in public/images",
  );

  try {
    const siteConfig = process.env;

    if ("SITE_TITLE" in siteConfig) {
      console.log("✅ Site config found");

      const template = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <base href="/">
     
      <!-- meta -->
      <meta charset="utf-8" />
      <meta property="og:type" content="Website" />

      <!-- title -->
      <title>${siteConfig.SITE_TITLE}</title>
      <meta property='og:title'  content='${siteConfig.SITE_TITLE}'>
      <meta name='twitter:title' content='${siteConfig.SITE_TITLE}'>
      <meta property="og:site_name" content='${siteConfig.SITE_TITLE}' />

  
      <!-- description -->
      <meta name='description'         content='${siteConfig.SITE_DESCRIPTION}'>
      <meta property='og:description'  content='${siteConfig.SITE_DESCRIPTION}'>
      <meta name='twitter:description' content='${siteConfig.SITE_DESCRIPTION}'>
  
      <!-- viewport -->
      <meta name="viewport" content="width=device-width, initial-scale=1" >
  
      <!-- ua -->
      <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
  
      <!-- image -->
      <meta property="og:image"  content='${siteConfig.SITE_SHAREIMAGE}'>
      <meta name="twitter:image" content='${siteConfig.SITE_SHAREIMAGE}'>
      <meta property="og:image:secure_url" content='${siteConfig.SITE_SHAREIMAGE}' /> 
      <meta property="og:image:type" content='image/png' /> 
      <meta property="og:image:width" content='1200' /> 
      <meta property="og:image:height" content='630' />
      
      <!-- Theme -->
      <meta name="theme-color" content="${siteConfig.SITE_THEME}" />
  
      <!-- Icons -->
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
      <link rel="icon" href="${siteConfig.SITE_FAVICON}" />
      
      <!-- Manifest -->
      <link rel="manifest" href="/site.webmanifest">

      <script type="text/javascript" src="/deepAR/deepar.js"></script>

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-C9WHYV40DG"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-C9WHYV40DG');
      </script>


      <link rel="stylesheet" href="/fonts/fonts.css" />
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>     
      `;

      const manifest = {
        name: siteConfig.SITE_TITLE,
        short_name: siteConfig.SITE_TITLE,
        icons: [
          {
            src: "/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: siteConfig.SITE_THEME,
        background_color: "#ffffff",
        display: "standalone",
      };

      const writePath = path.resolve(process.cwd(), "./public");
      await fs.writeFile(
        path.resolve(process.cwd(), ".") + "/index.html",
        template,
        {
          encoding: "utf-8",
        },
      );
      console.log("✅ Wrote index.html");
      await fs.writeFile(
        writePath + "/site.webmanifest",
        JSON.stringify(manifest, null, 4),
        { encoding: "utf-8" },
      );
      console.log("✅ Wrote site.webmanifest");
      console.log("✨ Done");
    } else {
      console.log("❌ No Site config found. Add a .site file.");
    }
  } catch (error) {
    throw error;
  }
}

main();
