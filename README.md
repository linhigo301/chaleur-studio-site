# Chaleur Studio 官方網站

GA4 正式接入：使用者已提供並確認網頁串流 `Chaleur Studio Website`（串流 ID `15775818958`），評估 ID 為 `G-5VCL6VNZ69`，截圖確認加強型評估已關閉。網站改用正式 ID，正常訪客開始送出 Analytics；以下 Placeholder 發布敘述為先前紀錄。管理者排除與隱私限制維持。

2026-09-14 WEB-006 Analytics：六頁已加入集中 GA4 架構、瀏覽器管理者排除與四種互動事件。使用者已確認發布，透過既有 GitHub Pages main 分支部署。Measurement ID 仍為 Placeholder，沒有正式送出 Analytics。操作與啟用前待辦見下方 Analytics；本次工單與既有同編號的產品頁收尾工單分開記錄於 [Analytics 交付紀錄](WEB006-ANALYTICS.md)。

2026-09-14 EMBERLITE：完成繁中／en-GB 產品頁與首頁卡片，定位為暗房放大機曝光控制系統，採放相記錄、光譜詳情、濾鏡庫三張實機圖。圖片位於 images/emberlite/；未複製內部交接文件或產品原始碼。Chrome 375／768／1440px 四頁共 12 組檢查通過，並檢視桌機與手機排版。使用者已確認發布，透過既有 GitHub Pages main 分支部署；以下 EMBERLITE 占位描述為歷史紀錄。

2026-09-14 WEB-006：完成產品頁專業收尾，統一服務對象用語、調整本機資料說明、降低重複框線、第五張月曆限制原始寬度、分開 DEMO 版本資訊與下載按鈕，並補齊 canonical／Open Graph。五張原圖與下載網址不變。Chrome／Edge 六種尺寸雙語共 24 組驗證通過，依工單直接發布；詳見 [WEB-006 交付紀錄](WEB006.md)。

2026-09-14 本次發布：使用者已確認發布 WEB-005 與後續調整，包含五組圖片順序、五組標題／正文上緣對齊、下半部標題垂直置中、移除圖框底色，以及繁體中文版 V1.3.13 DEMO 下載入口。以下「未發布／僅本機預覽」為各次修改歷史。正式商用版本仍未發行。

2026-09-14 圖片排序追加：依使用者最新指定，展示區改為 01 接班開始、02 建立服務對象事件時間軸、03 人員事件追查、04 跨班處理、05 月份回看，共五組。第 01 張為 DEMO 本班概況，保留 ENGINEERING／DEMO 專有限制；其餘四張保留 V1.3.13 標籤。此追加取代前版三組 Feature／四張圖的安排，其餘 WEB-005 內容維持。仍僅本機預覽、未發布。

2026-09-14 WEB-005：交班產品頁已完成雙語內容與排版重整，本次僅本機預覽、未發布。主流程為四張操作圖與三組 Feature，展示警語集中一次，功能改為四群，規格與版本狀態精簡；詳見 [WEB-005 執行／交付紀錄](WEB005.md)。以下先前「六張展示圖」及工程區塊敘述為歷史狀態，原始交接資料仍完整保留。

2026-09-14 發布更新：使用者已確認發布此版產品頁，透過既有 GitHub Pages（`linhigo301/chaleur-studio-site`，`main` 分支）部署。以下「僅本機預覽／未發布」為先前預覽階段紀錄。產品本身的正式發行、DEMO 下載及授權條件仍保留待確認，網站發布不代表產品發行核准。

第一版品牌官網與多產品展示入口。使用原生 HTML、CSS、JavaScript，無套件安裝、無建置步驟、無後端，適用 GitHub Pages。

2026-09-14 本機預覽更新：交班系統雙語產品頁已依交接資料重製，納入五張 V1.3.13 展示圖，保留工程版與虛構資料註記、授權及發行待確認事項。兩份原始 Markdown 與五張原圖放在 `docs/product-handoff/`；完整更正與追加月曆圖記錄見 [交班產品內容紀錄](content/products/handover-system.md)。本次未 commit、push 或發布；以下第一版的「交班截圖待提供」、20～30 床與買斷方向等舊敘述，以本次內容紀錄及交接資料為準。首頁仍保留既有圖片占位版型。

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

JavaScript 控制手機選單、交班頁情境切換及集中 Analytics。手機選單支援 Escape 關閉與 `aria-expanded`；停用 JavaScript 時直接顯示導覽。響應式斷點為 1000px 與 700px；手機改為單欄、可展開導覽。已設定 reduced-motion，無外部字型。Analytics 保持 Placeholder 時不載入 Google；填入正式 ID 並通過設定條件後才會非同步載入 GA4。

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

目前沒有正式圖片。兩語言首頁產品卡使用相同暖米白純文字 Placeholder；產品詳情頁保留既有待截圖區，不引用不存在的圖片。品牌只使用 Chaleur Studio 文字，未自創正式 Logo 或 favicon。

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

## Typography 維護

最終字級由 css/style.css 頂部 tokens、集中 Typography 規則及 Responsive tokens 管理。WEB-002 獨立覆蓋層已整合移除；不要追加下一代 Typography override。正文桌面／平板 18px、手機 17px，行距 1.63；輔助資訊至少 13px。

Font Stack、全部字級、標題文案、雙語 Chrome／Edge 驗證與人工確認項目見 [Typography 第二階段交付](TYPOGRAPHY.md)。

GitHub 設定步驟已於 2026-09-13 核對官方文件：[Pages 發佈來源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[自訂網域](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。


CSS 快取：六頁 stylesheet URL 使用內容雜湊版本參數。每次修改 css/style.css，應同步更新六頁的 ?v= 值，避免新 HTML 搭配舊 CSS。


WEB-004 現行 Typography 與產品 Placeholder 規則、全部 24 項驗證回報见 [WEB004.md](WEB004.md)。首頁已移除舊紙張／同心圓插圖與相關 CSS；先前交付紀錄中的概念圖描述為歷史狀態。

交班頁追加更新：目前共六張展示圖片，新增 DEMO 交班概要、剪貼簿分享與 Excel 備存說明，適用版本限制見圖片旁註記。原五張 V1.3.13 工程展示註記保留。僅供本機預覽。

## Analytics

### 集中設定與啟停

`js/analytics.js` 頂部目前使用正式 ID `G-5VCL6VNZ69`；如需回到 dry-run，改回 `G-XXXXXXXXXX`：

- `GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'` 是明確 Placeholder，維持本機 dry-run，**不載入 Google、不建立 GA Cookie、不送任何資料**。Console 顯示 `Placeholder ID; dry run only. No data sent.`，不假稱正式啟用。
- `ANALYTICS_ENABLED = false` 全站停用；`true` 開啟架構。填入自己 GA4 網頁資料串流提供的正式 Measurement ID 後才會啟用 Google tag。不要把 Measurement Protocol API secret 放入公開網站。
- 每頁只引用一次有 `defer` 的 analytics.js；Google script 動態 `async` 載入，不阻擋內容。失敗時網站照常可用。不要再加入第二份 gtag／GTM。
- 修改 analytics.js（包含正式 ID／開關）後，更新六頁 script URL 的 `?v=` 內容雜湊，避免快取舊設定。
- 正式初始化 Console：`[Chaleur Analytics] Analytics enabled.`；只代表程式初始化，是否入站仍須在 GA 後台驗證。
- `REQUIRE_CONSENT` 是未來 Consent UI 的載入閘門；設為 `true` 時，只有已保存同意才載入 GA。UI 可呼叫 `window.chaleurAnalytics.setConsent(true/false)`；false 先停止追蹤並重新載入，讓 Google tag 離開頁面。選擇保存在 `chaleurAnalyticsConsent`。明確 denied 即使尚未要求 Consent 也會阻止載入。接口本身不是 Cookie banner，撤回不會自動刪除已有 Cookie。

### 管理者流量排除

- 開啟：`https://linhigo301.github.io/chaleur-studio-site/?internal=1`
- 解除：`https://linhigo301.github.io/chaleur-studio-site/?internal=0`
- localStorage key：`chaleurAnalyticsInternal`，值為字串 `true`；解除時移除 key。
- 在 GA 初始化前處理；排除時不載入 Google、不建立 dataLayer、不送 Page View 或互動事件。Console 顯示 `[Chaleur Analytics] Internal traffic excluded.`。
- `history.replaceState()` 僅刪除 internal，保留其他 query、UTM、hash 及 history state，不重新導頁。不要依賴 IP。
- localStorage 按瀏覽器、裝置及 origin 保存：桌機 Chrome、桌機 Edge、iPhone Safari **各自執行一次** `?internal=1`。無痕模式、清除網站資料、換網域後需重設；同一 origin 的其他網站也可能共用 localStorage 命名空間，此 key 為本站專用。
- 同 origin 已開分頁收到排除的 storage 事件後會停止後續追蹤；先前已載入的 Google script 需重新整理才會卸載，已送出的歷史資料無法追回。解除後其他既有分頁也請重新整理。
- localStorage 無法讀寫時採停止分析，不讓網站故障，也不假稱排除偏好已永久儲存。

### Page View 與事件

六個現行頁面（兩個首頁、雙語交班系統、雙語 EMBERLITE）都載入相同 analytics.js。每次文件載入手動送一次 `page_view`，設定 `send_page_view: false` 避免 config 自動重複。hash／情境切換不算新頁。

共用參數包含 `page_path`、`page_title`、`page_location`、`page_referrer`、`language`、`site_language`。本站語系固定 `zh-TW`／`en-GB`；page_path 取自頁內靜態對應語言的 alternate link，保留 GitHub Pages 子路徑，排除訪客 query／hash。新增頁面需保留正確 `lang`、title、對應自身語系的 alternate link 並引用相對路徑的 analytics.js；無有效頁面資料時不追蹤。

| 事件 | 觸發 | 專用參數 |
| --- | --- | --- |
| `language_switch` | 點目前頁面的另一語言 | `from_language`, `to_language`, `current_page` |
| `product_view_click` | 首頁 `.product-card .card-link`（含子元素） | `product`, `source_page`，以及共用 `language` |
| `cta_click` | 探索、產品卡、聯絡、理念、截圖、流程／下載區導覽 | `cta_name`, `page`，以及共用 `language` |
| `contact_click` | mailto 或 LINE 連結 | `contact_method: email` 或 `line` |
| `demo_request`, `demo_download` | 僅保留名稱，未綁定 | 未啟用 |

CTA 名稱集中為 `explore_tools`、`learn_product`、`contact_us`、`our_approach`、`view_screenshots`、`view_workflow`、`view_downloads`。`view_downloads` 是前往既有頁內區塊，不代表下載完成。既有 DEMO 下載本身不送 demo 事件。

同一次產品卡點擊會各送一個 product_view_click 與 cta_click，供不同報表使用。產品名稱由靜態卡片 `/products/<slug>/` 路徑取得（現行 `handover-system`／`emberlite`）；新增產品沿用結構即可。事件採 document 委派，情境切換重繪後仍有效；不延遲或攔截導覽。聯絡點擊僅表示開啟聯絡方式，不表示訊息已送達。

### UTM 與隱私

使用標準 UTM，例如：

```text
https://linhigo301.github.io/chaleur-studio-site/?utm_source=email&utm_medium=outreach&utm_campaign=rehab_home_tw_01
```

其他工單活動名稱為 `dormitory_tw_01`／`uk_care_home_test_01`。`internal=1` 可同時存在，處理後上述 UTM 仍留在網址。交班頁語言切換沿用既有情境／query 行為；其他頁保持既有原生導覽，GA 正常以同瀏覽器 session 延續來源，不把 UTM 加到每個內部連結。

`UTM_VALUES` 是集中公開標籤清單：目前接受 source=email、medium=outreach 與上述三個 campaign。`utm_id`、`utm_content`、`utm_term` 已預留空清單。新活動前先把**已審閱、無個資**的固定標籤加入清單；未核准值不會傳到 GA，瀏覽器網址不受影響。這是標準 UTM 的值限制，不是自訂追蹤參數。不可放入姓名、email、LINE ID、電話、個別收件人代碼或表單內容；允許清單仍需人工審核，不能用程式保證任何標籤都沒有個資。

只有已核准 UTM 進入 page_location／對應 campaign 設定。其他 query（含 scenario）、fragment 一律不送；referrer 只保留 origin 以辨識來源網域，犧牲來源詳細路徑。事件不傳完整目標連結、聯絡文字、email／LINE ID、user_id、表單或任何產品內資料。網站不自建 IP 紀錄；使用 Google tag 時會有一般對 Google 的網路連線，不能宣稱 Google 不會接觸網路 IP。

### 正式啟用前與 GA 後台

1. 建立／選擇 GA4 網頁資料串流，取得正式 Measurement ID。
2. **在該串流關閉 Enhanced Measurement（包含 history Page View、outbound click、file download、form interaction／site search 等），關閉自動 user-provided data 收集；不要透過其他 tag 自動收集聯絡連結或未清理 URL。** 本站只使用手動白名單事件，避免額外 click／file_download 傳送原始 URL 或產生重複 Page View。程式無法替你修改 GA 管理介面；此設定是正式 ID 啟用的前置條件。廣告儲存／個人化同意預設 denied，程式也關閉 Google signals／ad personalisation。
3. GA 管理員建立需用於報表的事件範圍自訂維度，如 `site_language`、`from_language`、`to_language`、`product`、`contact_method`、`cta_name`。主要用戶／瀏覽數、網頁路徑與來源使用 GA 內建報表；`utm_medium=outreach` 可能歸入 Unassigned channel，應先看 Session source / medium 與 Session campaign。
4. 正式 ID 上線後，以非管理者的獨立測試瀏覽器確認 Realtime／DebugView 及 Network；尚未完成前，不宣稱 GA4 已收到資料。Console debug 功能只輸出本機資料，不會自動設定 GA `debug_mode`。

依 Google 文件，[pageview 與 Enhanced Measurement](https://developers.google.com/analytics/devguides/collection/ga4/views)、[設定參數](https://developers.google.com/analytics/devguides/collection/ga4/reference/config)、[Consent mode](https://developers.google.com/tag-platform/security/guides/consent) 是後續維護依據。

### UK／EU Consent 待確認

**目前 `REQUIRE_CONSENT=false` 且已使用正式 ID，正常訪客會使用 GA 的非必要 Analytics Cookie。正式向 UK／EU 大量推廣前，需完成 Consent／Cookie 機制確認。** 必須完成適當的同意 UI、同意前封鎖、撤回／Cookie 清理、隱私揭露及實際地區適用性確認，再啟用相應策略。Consent 接口只是技術預留，不代表已符合任何國家全部隱私法規；Consent mode 也不會自動替網站取得使用者同意。

公開網站流量分析與交班系統的 Local-first／本機資料保存分開；此檔案不植入交班桌面 App 或 EMBERLITE App。

### 本機測試

用 HTTP 開啟網站，Console 執行：

```js
chaleurAnalytics.status()
chaleurAnalytics.debug(true)
```

正式 ID 下請避免直接用本機網站進行大量測試，以免送入正式 GA。需要純本機 Console dry-run 時，先在未發布的測試副本把 ID 改回 `G-XXXXXXXXXX`；保留 Console log 後點語言、兩張產品卡、CTA、email／LINE，可看 `Dry run: <event>` 與清理過的參數，不會發送 Google 請求。依序測試 A `/`、B `/?internal=1`、C `/products/handover-system/`、D `/?internal=0`、E 重開網站；狀態應是 dry-run、internal、internal、dry-run、dry-run。正式 ID 下 A／D／E 才會是 enabled。

可重跑 `node tests/analytics.cjs`；需要施工環境提供 Playwright 及 Chrome／Edge，或設定 `PLAYWRIGHT_MODULE` 為已安裝的 Playwright 模組路徑，`TEST_BROWSERS=chrome` 可只跑 Chrome。測試自行啟動 localhost 靜態 server，使用獨立 context、記憶體中的測試 ID 與離線 Google script 替身，封鎖所有外部流量，不修改正式 ID，不代表 Google 入站測試。網站本身不依賴 Playwright／Node 或建置流程。
