# Chaleur Studio 官方網站

第一版品牌官網與多產品展示入口。使用原生 HTML、CSS、JavaScript，無套件安裝、無建置步驟、無後端，適用 GitHub Pages。

## 專案邊界

此工作區與唯一預定 Repository 名稱均為 `chaleur-studio-site`。網站只放品牌與產品介紹、公開圖片及公開文件，不包含產品原始碼、私人資料、授權碼或大型安裝檔。

`personnel-control-app` 與 `EMBERLITE_MAIN_v3_20260215_BASELINE_fix4_0_VSCODE` 是獨立專案。不得修改、解析或複製它們的原始碼到此站，也不得將本站推送至這兩個 Repository。

本站已連結並推送至 [linhigo301/chaleur-studio-site](https://github.com/linhigo301/chaleur-studio-site)，GitHub Pages 已設定由 `main` 分支根目錄發佈。網站網址：[Chaleur Studio](https://linhigo301.github.io/chaleur-studio-site/)。

## 完整交付結構

```text
chaleur-studio-site/
├── .gitignore
├── .nojekyll
├── index.html
├── en/
│   ├── index.html
│   └── products/
│       ├── handover-system/index.html
│       └── emberlite/index.html
├── products/
│   ├── handover-system/index.html
│   └── emberlite/index.html
├── content/
│   └── products/
│       ├── handover-system.md
│       └── emberlite.md
├── css/style.css
├── js/main.js
├── images/
│   ├── handover/.gitkeep
│   ├── emberlite/.gitkeep
│   └── logo/.gitkeep
├── favicon/.gitkeep
├── README.md
└── DELIVERY.md
```

`.git/` 是本機 Git 中繼資料。`.preview/` 是已忽略的本機施工／驗證暫存資料（包含產頁草稿工具、驗證腳本、結果及截圖），不屬於部署內容，也不是網站執行依賴。正式維護請直接編輯已交付 HTML，不要重新執行暫存產頁工具覆蓋後續修改。

## 本機預覽

在專案根目錄執行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

瀏覽 `http://127.0.0.1:8000/`。停止請按 Ctrl+C。無須 npm 或 Python 套件。Python 僅供本機預覽，正式站只有靜態檔案。

請使用 HTTP 預覽，而非直接以 `file://` 開啟，以正確處理目錄型網址。

## 頁面與雙語

| 內容 | 繁中 zh-TW | 英文 en-GB |
| --- | --- | --- |
| 首頁 | `/` | `/en/` |
| 交班系統 | `/products/handover-system/` | `/en/products/handover-system/` |
| EMBERLITE | `/products/emberlite/` | `/en/products/emberlite/` |

表格路徑相對於網站部署根目錄；GitHub project Pages 根目錄一般為 `/chaleur-studio-site/`。所有實際頁面資源與導覽均使用相對路徑，沒有寫死網域或 `/css/` 等網域根路徑。

右上角 `繁中 | EN` 是原生連結，前往目前頁面的另一語言版本，並以 `aria-current` 標示目前語言。切換不依賴 JavaScript 或自動語系判斷。每頁設定正確的 `lang`、title、description 及雙語 hreflang。英文採英式用語，例如 organisation、licence。網站英文頁不代表產品已有英文版本。

首頁包含品牌 Hero、產品介紹／兩張卡片、品牌與設計理念、聯絡資訊、頁尾。交班系統頁包含設計規模、核心範圍、Local-first、授權方向、市場狀態、截圖占位、DEMO／下載占位。EMBERLITE 頁只含已確認名稱、產品類型與待補區域。

JavaScript 只控制手機選單，支援 Escape 關閉與 `aria-expanded`。停用 JavaScript 時直接顯示導覽。響應式斷點為 1000px 與 700px；手機改為單欄、可展開導覽。已設定 reduced-motion，無外部字型、追蹤器或第三方執行時請求。

## 更新產品資料

1. 各產品專案自行產出「網站產品資料.md」。
2. 由人工確認可公開的文字與圖片。
3. 將確認後資料放入 `content/products/` 對應文件。
4. 同步修改繁中、英文產品 HTML 及需要更新的首頁卡片。
5. 驗證資訊一致、既有／規劃中狀態正確、語言切換與下載連結可用。

`content/products/*.md` 是人工可讀的內容交接紀錄，並非 CMS 或自動資料來源。本站不得跨專案讀原始碼來推測功能，不可虛構價格、客戶、認證或海外使用實績。

## 新增產品／英文頁

1. 建立 `content/products/<slug>.md`，記錄人工確認的資料及缺項。
2. 建立 `products/<slug>/index.html` 和 `en/products/<slug>/index.html`，參考現有產品頁結構。
3. 在兩個首頁的 `.product-grid` 新增卡片；如有新增，更新 `Selected tools` 範圍文字。
4. 設定獨立 title、description、唯一 h1、正確 `lang`，以及兩語言相互對應的連結與 hreflang。
5. 繁中產品頁引用 `../../css/style.css`、英文產品頁引用 `../../../css/style.css`；JS 及圖片遵循同樣層級。
6. 測試專案子路徑、重新整理與各螢幕尺寸。

新增其他英文頁時亦需建立真正的靜態 HTML，不能只新增語言外觀按鈕。

## 圖片與品牌識別

目前沒有正式圖片，頁面使用 CSS 幾何插畫（已標示概念示意、非產品畫面）及 HTML 占位，不引用不存在的圖片，不會破圖。品牌只使用 Chaleur Studio 文字，未自創正式 Logo 或 favicon。

| 待提供素材 | 建議尺寸／格式 | 放置檔案 | 替換位置 |
| --- | --- | --- | --- |
| 交班系統主要畫面，須去識別化 | 1600 × 900 或原生比例，WebP／PNG | `images/handover/overview.webp` | 兩語言交班頁 `.screenshot-placeholder` |
| EMBERLITE 正式產品畫面 | 1600 × 900 或原生比例，WebP／PNG | `images/emberlite/overview.webp` | 兩語言 EMBERLITE 頁 `.screenshot-placeholder` |
| 首頁產品卡片圖（可選） | 1200 × 650，WebP | `images/handover/card.webp`、`images/emberlite/card.webp` | 兩首頁對應 `.card-visual` |
| 正式 Logo（可選） | SVG，或透明 PNG、寬至少 600px | `images/logo/chaleur-studio.svg` | 所有頁面的 `.wordmark` |
| 正式 favicon（可選） | SVG 或 32 × 32 PNG／ICO | `favicon/favicon.svg` | 所有頁面 head 新增 icon link |

若原始畫面比例不同，請保留原始比例，勿裁切關鍵資訊。加入真圖時以 `<img>` 取代占位，提供具體 alt、width、height，並設定 `max-width:100%;height:auto;display:block` 與 `loading="lazy"`。更新 figcaption、移除占位文字，並在本機確認檔案存在。真實截圖不要保留服務對象姓名、個資、機構資料或授權資訊。

## DEMO 與下載連結

目前所有未提供項目均是狀態文字，不是可點擊的假下載按鈕。首頁「了解產品」、產品頁導覽與 email 已可使用。

取得人工確認的公開 GitHub Releases 或其他 HTTPS 連結後，在兩語言產品頁 `.download-item` 中以實際 `<a class="button" href="已確認的完整 HTTPS URL">…</a>` 替換 `.unavailable`，同步填入已確認的版本、平台與語言資訊。外部 Releases 下載不加跨來源 `download` 屬性。不得把大型安裝檔加入本站 Git history，也不要把私有或含短期憑證的 URL 公開。

繁中交班 DEMO 已預留位置；本次未提供英文 DEMO。EMBERLITE 是否有 DEMO 仍待確認。

## GitHub Pages 部署

網站無建置工具或自訂 Actions workflow 依賴。`origin` 指向 `https://github.com/linhigo301/chaleur-studio-site.git`，目前分支 `main`，Pages 已啟用 HTTPS 並以 `main / (root)` 為發佈來源。後續經確認的更新可 commit 後執行 `git push origin main`，GitHub 會自動重新部署。

以下保留首次設定與重建部署的操作步驟（目前 Repository 與 origin 已存在，不要重複新增）：

1. 在正確帳號建立全新的 **Public** Repository，名稱必須是 **chaleur-studio-site**。為避免遠端初始提交衝突，建立時不要另加 README、gitignore 或 licence。若已存在則先核對它確實是本站 Repository，不能改用其他產品 repo。
2. 在本機專案根目錄執行 `git status`，核對只有本站公開內容；確認 `.preview/` 未納入版本控制。
3. 如尚無提交，執行 `git add .` 與 `git commit -m "Build Chaleur Studio bilingual static website"`。如 Git 要求身份，使用你自己的已確認設定，不要代填身份。
4. 確認 `git branch --show-current` 為 `main`。
5. 執行 `git remote add origin https://github.com/YOUR-ACCOUNT/chaleur-studio-site.git`，先將 YOUR-ACCOUNT 換成確認過的帳號。若已有 origin，先確認內容，不可盲目覆蓋。
6. 用 `git remote -v` 核對後執行 `git push -u origin main`。
7. GitHub → Repository → **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save**。
8. 等待 GitHub 部署成功，在 Pages 顯示的網址開啟本站，通常是 `https://YOUR-ACCOUNT.github.io/chaleur-studio-site/`。
9. 驗證首頁、`en/`、四個產品頁、CSS／JS、頁內連結、語言切換與直接重新整理。Pages 真實網址的最終驗證要在上線後進行。

`.nojekyll` 用於直接發佈靜態檔案。現階段不設 CNAME、canonical 或寫死網域；正式網域確認後，可加入每頁絕對 canonical，並將 hreflang 改成含正式網域的完整 URL。

## 日後設定 Custom Domain

1. 先確認自己擁有網域，並於 GitHub 帳號設定中完成網域驗證。
2. Repository → Settings → Pages → Custom domain 填入確認的網域並儲存。
3. 子網域（例如 www）通常設定 CNAME 到 `YOUR-ACCOUNT.github.io`（不含專案路徑）；根網域依 GitHub Pages 當時官方指示設定 A／AAAA 或 DNS 供應商支援的 ALIAS／ANAME。
4. 確認根目錄 CNAME 檔案僅含正式網域，將 GitHub 產生的變更同步到本機，避免後續部署覆蓋。
5. 等待 DNS 與憑證生效，在 Pages 勾選 Enforce HTTPS，重新驗證所有頁面，更新 canonical／hreflang。

此階段未操作網域或 DNS，實際部署時應再核對 GitHub 最新官方設定值。

## 待補與驗證

尚待正式截圖、EMBERLITE 產品資料、DEMO／下載 URL、授權細節、可選正式 Logo／favicon。現有 email：`linhigo301@gmail.com`（mailto）；繁中另列 LINE ID：`linhigo301`。

本次驗證範圍、結果與已知限制見 `DELIVERY.md`。

GitHub 設定步驟已於 2026-09-13 核對官方文件：[Pages 發佈來源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[自訂網域](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。
