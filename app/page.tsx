import Image from "next/image";
import { ProcessCarousel } from "@/components/ProcessCarousel";

const services = [
  {
    icon: "浴",
    title: "精致洗护",
    copy: "温和香波、深层冲洗、吹干梳通、耳眼清洁、指甲修剪和脚底毛整理。",
  },
  {
    icon: "剪",
    title: "造型美容",
    copy: "泰迪装、萌圆脸、短毛清爽装、猫咪局部修剪，先沟通再动剪。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    copy: "针对干燥、打结、换毛期和敏感肌，提供护毛、开结、除废毛等护理方案。",
  },
];

const prices = [
  {
    title: "基础洗护",
    copy: "适合日常清洁与短毛犬猫",
    price: "¥88",
    items: ["温和洗澡吹干", "耳眼清洁", "指甲与脚底毛"],
    cta: "预约基础款",
    featured: false,
  },
  {
    title: "精致全套",
    copy: "适合多数家庭宠物的月度护理",
    price: "¥168",
    items: ["基础洗护全项", "护毛素护理", "肛门腺与健康观察"],
    cta: "预约热门套餐",
    featured: true,
  },
  {
    title: "美容造型",
    copy: "适合需要修剪、造型和开结的宠物",
    price: "¥238",
    items: ["洗护加造型修剪", "局部精修沟通", "完工照片确认"],
    cta: "预约美容款",
    featured: false,
  },
];

const steps = [
  ["到店评估", "确认体重、毛量、皮肤状态和性格习惯。"],
  ["分区洗护", "犬猫分时段接待，工具和台面按次消毒。"],
  ["吹干修整", "低噪风机配合安抚，耐心梳通毛结。"],
  ["交付反馈", "告知皮肤、耳朵、牙口等观察结果。"],
];

const reviews = [
  {
    copy: "我家比熊以前洗澡很紧张，这里美容师会慢慢哄，洗完毛很蓬，眼周也修得干净。",
    name: "豆豆家长",
    pet: "比熊 · 精致洗护",
    rating: 5,
  },
  {
    copy: "猫咪洗护最怕应激，店里能提前约安静时段，回来以后状态很好，细节反馈也认真。",
    name: "奶茶家长",
    pet: "英短 · 安静时段洗护",
    rating: 4,
  },
  {
    copy: "价格透明，不会临时乱加项目。毛结情况会先拍照沟通，剪完比想象中自然。",
    name: "Lucky家长",
    pet: "贵宾 · 美容造型",
    rating: 5,
  },
  {
    copy: "第一次带小柴来，美容师先让它熟悉环境再开始。洗完没有乱喷香精，毛摸起来很清爽。",
    name: "丸子家长",
    pet: "柴犬 · 基础洗护",
    rating: 5,
  },
  {
    copy: "我家猫胆子小，之前去别处会躲一天。这次回家还能正常吃饭，过程反馈也让我很安心。",
    name: "芝麻家长",
    pet: "布偶 · 猫咪护理",
    rating: 5,
  },
  {
    copy: "肚皮和脚底毛修得很细，耳朵也清理得干净。交付时会提醒皮肤状态和日常梳毛方法。",
    name: "年糕家长",
    pet: "柯基 · 全套护理",
    rating: 5,
  },
  {
    copy: "预约制真的省心，到店不用排队。狗狗洗护结束还有照片确认，家里老人看了也放心。",
    name: "可乐家长",
    pet: "金毛 · 洗护除废毛",
    rating: 4,
  },
];

function renderStars(rating: number) {
  const fullStars = Math.max(0, Math.min(5, Math.round(rating)));
  const emptyStars = 5 - fullStars;

  return `${"★".repeat(fullStars)}${"☆".repeat(emptyStars)}`;
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <QuickFacts />
        <Services />
        <Prices />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 flex min-h-[72px] items-center justify-between gap-4 border-b border-line/80 bg-cream/90 px-[clamp(18px,5vw,72px)] backdrop-blur-xl">
      <a
        className="flex shrink-0 items-center gap-3 font-extrabold tracking-normal"
        href="#top"
        aria-label="暖爪宠物洗护首页"
      >
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-sage-dark text-xl text-white">
          爪
        </span>
        <span>暖爪宠物洗护</span>
      </a>
      <nav
        className="hidden items-center gap-7 text-sm font-bold text-muted md:flex"
        aria-label="主导航"
      >
        <a className="hover:text-sage-dark" href="#services">
          服务
        </a>
        <a className="hover:text-sage-dark" href="#prices">
          价目
        </a>
        <a className="hover:text-sage-dark" href="#process">
          流程
        </a>
        <a className="hover:text-sage-dark" href="#contact">
          地址
        </a>
        <a
          className="rounded-full bg-coral px-4 py-2.5 text-white transition hover:bg-coral-dark"
          href="tel:400-886-1026"
        >
          400-886-1026
        </a>
      </nav>
      <a
        className="rounded-full bg-coral px-4 py-2 text-sm font-extrabold text-white md:hidden"
        href="tel:400-886-1026"
      >
        电话预约
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative grid min-h-[calc(100vh-72px)] items-center overflow-hidden bg-mint"
      aria-label="暖爪宠物洗护首屏"
    >
      <Image
        className="object-cover object-center"
        src="/assets/pet-spa-hero.png"
        alt="干净明亮的宠物洗护店里，一只刚洗护完成的小狗坐在护理台上"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream/10" />
      <div className="relative z-10 ml-[clamp(18px,7vw,90px)] w-[min(650px,calc(100%-36px))] py-16 md:py-20">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-extrabold text-sage-dark before:h-0.5 before:w-9 before:bg-coral before:content-['']">
          一宠一浴巾 · 分区消毒 · 透明护理
        </p>
        <h1 className="max-w-[11em] text-5xl font-black leading-[1.04] tracking-normal text-ink md:text-7xl lg:text-[84px]">
          让毛孩子干净、放松、香喷喷回家
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#4f5d59] md:text-xl">
          暖爪提供犬猫洗澡、美容修剪、皮毛护理和基础健康观察。预约制接待，减少等待和应激，让每一次洗护都更安心。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="pill-button pill-button-primary" href="#contact">
            立即预约
          </a>
          <a className="pill-button pill-button-secondary" href="#prices">
            查看套餐
          </a>
        </div>
      </div>
    </section>
  );
}

function QuickFacts() {
  return (
    <div
      className="relative z-10 mx-auto -mt-12 grid w-[min(840px,calc(100%-36px))] gap-3 md:grid-cols-3"
      aria-label="门店优势"
    >
      {[
        ["45+", "项洗护细节检查"],
        ["1v1", "美容师全程负责"],
        ["8年", "犬猫护理经验"],
      ].map(([value, label]) => (
        <div className="soft-card min-h-28 p-6" key={label}>
          <strong className="block text-3xl font-black text-sage-dark">
            {value}
          </strong>
          <span className="mt-1 block text-sm font-bold text-muted">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Services() {
  return (
    <section className="section-shell" id="services">
      <SectionHead
        title="从洗澡到造型，一次照顾到位"
        copy="按体型、毛量和皮肤状态定制护理，不硬推项目，只做宠物真正需要的服务。"
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article className="soft-card p-7" key={service.title}>
            <div
              className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-mint text-xl font-black text-sage-dark"
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <h3 className="text-2xl font-black">{service.title}</h3>
            <p className="mt-3 text-muted">{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section className="section-shell bg-mint/70" id="prices">
      <SectionHead
        title="清晰价目，按需选择"
        copy="以下为常见体型起步价，实际价格会根据毛量、打结程度和护理难度确认。"
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {prices.map((plan) => (
          <article
            className={`rounded-lg border p-7 ${
              plan.featured
                ? "border-coral bg-coral text-white shadow-coral"
                : "border-line bg-paper shadow-soft"
            }`}
            key={plan.title}
          >
            <h3 className="text-2xl font-black">{plan.title}</h3>
            <p
              className={`mt-2 ${
                plan.featured ? "text-white/85" : "text-muted"
              }`}
            >
              {plan.copy}
            </p>
            <div className="my-6 text-5xl font-black">
              {plan.price} <small className="text-base font-bold">起</small>
            </div>
            <ul className="mb-7 space-y-3">
              {plan.items.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              className={`pill-button w-full ${
                plan.featured
                  ? "border-white/60 bg-white text-coral hover:bg-cream"
                  : "pill-button-secondary"
              }`}
              href="#contact"
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-shell" id="process">
      <SectionHead
        title="每一步都看得见"
        copy="我们把洗护拆成清楚的流程，减少宠物紧张，也让主人放心。"
      />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
        {steps.map(([title, copy], index) => (
          <article className="rounded-lg border border-line bg-paper p-6" key={title}>
            <span className="text-sm font-black text-coral">
              0{index + 1}
            </span>
            <h3 className="mt-2 text-xl font-black">{title}</h3>
            <p className="mt-2 text-sm text-muted">{copy}</p>
          </article>
        ))}
      </div>
      <ProcessCarousel />
    </section>
  );
}

function Reviews() {
  const reviewLoop = [...reviews, ...reviews];

  return (
    <section className="section-shell overflow-hidden bg-white" aria-label="客户评价">
      <SectionHead
        title="被附近主人反复选择的理由"
        copy="从第一次紧张试洗，到后来主动进门，每一条评价都来自一次被认真对待的洗护。"
      />
      <div className="reviews-marquee mx-auto max-w-6xl" aria-live="off">
        <div className="reviews-track">
          {reviewLoop.map((review, index) => (
            <article
              className="min-h-[260px] w-[min(82vw,360px)] shrink-0 rounded-lg border border-line bg-cream p-7 shadow-soft"
              key={review.name + "-" + index}
              aria-hidden={index >= reviews.length}
            >
              <div
                className="text-lg tracking-normal text-coral"
                aria-label={review.rating + "星评价"}
              >
                {renderStars(review.rating)}
              </div>
              <p className="mt-4 text-muted">“{review.copy}”</p>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
                <strong className="block text-ink">{review.name}</strong>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-sage-dark">
                  {review.pet}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell bg-sage-dark text-white" id="contact">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
        <div>
          <h2 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
            预约一个舒服的洗护时段
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            提前预约可保留独立护理台位。首次到店建议预留 90-150
            分钟，我们会根据宠物状态调整节奏。
          </p>
          <ul className="mt-8 space-y-4">
            {[
              ["地址", "上海市浦东新区花木路 1026 号 1F"],
              ["营业", "周一至周日 10:00-20:30"],
              ["电话", "400-886-1026"],
            ].map(([label, value]) => (
              <li
                className="flex flex-col gap-1 border-b border-white/20 pb-4 sm:flex-row sm:items-center sm:gap-5"
                key={label}
              >
                <strong className="min-w-14">{label}</strong>
                <span className="text-white/80">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-white p-6 text-ink shadow-soft">
          <form className="space-y-4" action="#" method="get">
            <FormLabel label="主人称呼">
              <input type="text" name="name" placeholder="例如：王女士" />
            </FormLabel>
            <FormLabel label="联系电话">
              <input type="tel" name="phone" placeholder="请输入手机号" />
            </FormLabel>
            <FormLabel label="宠物类型">
              <select name="pet" defaultValue="小型犬">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他</option>
              </select>
            </FormLabel>
            <FormLabel label="期望到店时间">
              <input type="datetime-local" name="arrivalTime" />
            </FormLabel>
            <FormLabel label="预约需求">
              <textarea
                name="message"
                placeholder="例如：泰迪 5kg，想做精致洗护和脸部修剪"
              />
            </FormLabel>
            <button className="pill-button pill-button-primary w-full" type="submit">
              提交预约信息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactElement;
}) {
  return (
    <label className="block text-sm font-extrabold text-sage-dark">
      <span className="mb-2 block">{label}</span>
      <span className="[&_input]:min-h-12 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-line [&_input]:bg-cream [&_input]:px-4 [&_input]:text-base [&_input]:font-normal [&_select]:min-h-12 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-line [&_select]:bg-cream [&_select]:px-4 [&_select]:text-base [&_select]:font-normal [&_textarea]:min-h-28 [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-line [&_textarea]:bg-cream [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-base [&_textarea]:font-normal">
        {children}
      </span>
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-7 text-center text-sm text-white/75">
      © 2026 暖爪宠物洗护 · 用温柔和专业照顾每一只毛孩子
    </footer>
  );
}

function SectionHead({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
