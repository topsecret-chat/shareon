var Shareon=function(o){"use strict";const m="",s={facebook:t=>`https://www.facebook.com/sharer/sharer.php?u=${t.url}`,linkedin:t=>`https://www.linkedin.com/sharing/share-offsite/?url=${t.url}`,mastodon:t=>`https://toot.kytta.dev/?text=${t.title}${t.text?`%0D%0A%0D%0A${t.text}`:""}%0D%0A${t.url}${t.via?`%0D%0A%0D%0A${t.via}`:""}`,messenger:t=>`https://www.facebook.com/dialog/send?app_id=${t.fbAppId}&link=${t.url}&redirect_uri=${t.url}`,odnoklassniki:t=>`https://connect.ok.ru/offer?url=${t.url}&title=${t.title}${t.media?`&imageUrl=${t.media}`:""}`,pinterest:t=>`https://pinterest.com/pin/create/button/?url=${t.url}&description=${t.title}${t.media?`&media=${t.media}`:""}`,pocket:t=>`https://getpocket.com/edit.php?url=${t.url}`,reddit:t=>`https://www.reddit.com/submit?title=${t.title}&url=${t.url}`,telegram:t=>`https://telegram.me/share/url?url=${t.url}${t.text?`&text=${t.text}`:""}`,twitter:t=>`https://twitter.com/intent/tweet?url=${t.url}&text=${t.title}${t.via?`&via=${t.via}`:""}`,viber:t=>`viber://forward?text=${t.title}${t.text?`%0D%0A%0D%0A${t.text}`:""}%0D%0A${t.url}`,vkontakte:t=>`https://vk.com/share.php?url=${t.url}&title=${t.title}${t.media?`&image=${t.media}`:""}`,whatsapp:t=>`https://wa.me/?text=${t.title}${t.text?`%0D%0A%0D%0A${t.text}`:""}%0D%0A${t.url}`},u=t=>()=>{window.open(t,"_blank","noopener,noreferrer")},l=()=>{const t=document.querySelectorAll(".shareon");for(const r of t)for(const e of r.children)if(e){const d=e.classList.length;for(let i=0;i<d;i+=1){const a=e.classList.item(i);if(a==="copy-url"&&e.addEventListener("click",()=>{const n=e.dataset.url||r.dataset.url||window.location.href;navigator.clipboard.writeText(n),e.classList.add("done"),setTimeout(()=>{e.classList.remove("done")},1e3)}),Object.prototype.hasOwnProperty.call(s,a)){const n={url:encodeURIComponent(e.dataset.url||r.dataset.url||window.location.href),title:encodeURIComponent(e.dataset.title||r.dataset.title||document.title),media:encodeURIComponent(e.dataset.media||r.dataset.media||""),text:encodeURIComponent(e.dataset.text||r.dataset.text||""),via:encodeURIComponent(e.dataset.via||r.dataset.via||""),fbAppId:encodeURIComponent(e.dataset.fbAppId||r.dataset.fbAppId||"")},p=s[a](n);e.tagName.toLowerCase()==="a"?(e.setAttribute("href",p),e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank")):e.addEventListener("click",u(p));break}}}},c=document.currentScript;return c&&c.hasAttribute("init")&&l(),o.init=l,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),o}({});