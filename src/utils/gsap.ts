import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";

// 必要なプラグインを登録
gsap.registerPlugin(DrawSVGPlugin, SplitText, Flip);

export { gsap, DrawSVGPlugin, SplitText, Flip };
