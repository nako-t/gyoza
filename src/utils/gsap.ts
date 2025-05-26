import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

// 必要なプラグインを登録
gsap.registerPlugin(DrawSVGPlugin, SplitText);

export { gsap, DrawSVGPlugin, SplitText };
