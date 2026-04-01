import { motion } from 'motion/react';
import { MapPin, Camera, Zap, CheckCircle2, Users, Target, Award, PlayCircle, ShieldCheck } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-level-black min-h-screen text-white selection:bg-level-orange selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.1)_0%,transparent_70%)] pointer-events-none" />
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[18vw] leading-[0.8] tracking-tighter text-white uppercase z-10 text-center"
        >
          BASKETBALL
        </motion.h1>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mt-12 z-10 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-level-orange"></div>
            <p className="text-sm tracking-[0.3em] uppercase text-gray-400">Fitness is Art</p>
          </div>
          <p className="text-level-orange font-display text-4xl md:text-5xl tracking-wide">BOOKING BRIEF</p>
        </motion.div>
      </section>

      {/* 2. ABOUT LEVEL */}
      <section className="min-h-screen flex items-center px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          <FadeIn>
            <h2 className="font-display text-8xl md:text-[120px] leading-[0.85] uppercase">
              ABOUT<br/><span className="text-level-orange">LEVEL</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="space-y-8 border-l-2 border-level-orange pl-8 md:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-level-orange uppercase tracking-wide leading-snug">
              "Sức khỏe và hạnh phúc của bạn là sứ mệnh của chúng tôi"
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Level Fitness Center là trung tâm thể thao sở hữu chất lượng dịch vụ hàng đầu Hà Nội với định hướng chăm sóc sức khỏe toàn diện lên đến 10 bộ môn.
            </p>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-level-orange shrink-0 mt-1 w-5 h-5"/> Cơ sở vật chất & máy Technogym top 1 VN.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-level-orange shrink-0 mt-1 w-5 h-5"/> Sân bóng rổ trên cao chuẩn thi đấu đầu tiên.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-level-orange shrink-0 mt-1 w-5 h-5"/> Bể bơi 4 mùa tiêu chuẩn Olympic.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-level-orange shrink-0 mt-1 w-5 h-5"/> Cộng đồng hơn 6000 members trung thành.</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 3. BASKETBALL COURT */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-24 bg-level-gray">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn className="mb-20 border-b border-gray-800 pb-10">
            <h2 className="font-display text-7xl md:text-[100px] leading-[0.85] uppercase">
              BASKETBALL <span className="text-level-orange">COURT</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Sân trên cao", desc: "Kiệt tác không gian với kính tràn hiện đại, bắt trọn view thành phố từ tầng 6." },
              { title: "Không giới hạn", desc: "Bất chấp thời tiết (Indoor), hệ thống chiếu sáng không chói, tiện ích 5 sao." },
              { title: "Chuẩn thi đấu", desc: "Thiết kế theo tiêu chuẩn thi đấu 3x3, mặt sàn bám tốt, cảm giác bóng hoàn hảo." },
              { title: "Lựa chọn số 1", desc: "Dành cho các đội bóng, Baller nâng tầm kỹ năng và người yêu môi trường có gu." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-level-black p-8 rounded-2xl border border-gray-800 hover:border-level-orange transition-colors">
                <h4 className="font-display text-2xl text-white mb-4 tracking-wide">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LUXURY & LIFESTYLE */}
      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-6xl md:text-8xl text-level-orange mb-10">LUXURY & LIFESTYLE</h2>
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-300">
              Khẳng định vị thế sân bóng rổ trên cao đầu tiên tại Hà Nội. Không chỉ là nơi tập luyện, mà còn là <span className="text-white font-semibold">trải nghiệm văn hóa bóng rổ hiện đại, văn minh.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. VISUAL DIRECTION */}
      <section className="min-h-screen flex items-center px-6 py-24 bg-level-gray">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <h2 className="font-display text-7xl md:text-[100px] mb-20 text-right leading-[0.85]">
              VISUAL<br/><span className="text-level-orange">DIRECTION</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="p-8 bg-level-black rounded-3xl">
              <Zap className="w-12 h-12 text-level-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Vibe & Phong cách</h3>
              <p className="text-gray-400">Năng động, "Cool ngầu", trẻ trung, giàu cảm xúc. Sử dụng nhạc beat mạnh, khớp với các động tác nhồi bóng/ném rổ.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="p-8 bg-level-black rounded-3xl">
              <Camera className="w-12 h-12 text-level-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Cinematic Video</h3>
              <p className="text-gray-400">Chất lượng cao, voice-off rõ ràng, ngắn gọn (~60s). Tập trung vào các góc quay nghệ thuật, bắt trọn khoảnh khắc.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="p-8 bg-level-black rounded-3xl">
              <MapPin className="w-12 h-12 text-level-orange mb-6" />
              <h3 className="text-2xl font-bold mb-4">Thời điểm vàng</h3>
              <p className="text-gray-400">Ưu tiên các shot quay lúc hoàng hôn hoặc buổi tối khi thành phố lên đèn. Đây là lúc sân bóng tại The Nine Tower đẹp và hút mắt nhất.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. OUTFIT & SOCIAL */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeIn>
            <h2 className="font-display text-6xl md:text-8xl mb-12">OUTFIT</h2>
            <ul className="space-y-8 text-xl text-gray-300">
              <li className="flex items-start gap-4">
                <div className="bg-level-gray p-3 rounded-full"><Award className="text-level-orange w-6 h-6"/></div>
                <span className="mt-2">Đồ bóng rổ (Jersey/Shorts) chuyên nghiệp, sạch sẽ.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-level-gray p-3 rounded-full"><Target className="text-level-orange w-6 h-6"/></div>
                <span className="mt-2">Giày bóng rổ chuyên dụng.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-level-gray p-3 rounded-full"><Users className="text-level-orange w-6 h-6"/></div>
                <span className="mt-2">Chơi theo team cần có trang phục chia đội rõ ràng.</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-gray-500 italic">* Gửi trang phục định mặc cho brand team duyệt trước 1 ngày.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-6xl md:text-8xl mb-12 text-level-orange">SOCIAL</h2>
            <div className="bg-level-gray p-10 rounded-3xl border border-gray-800">
              <h4 className="text-white font-bold text-xl mb-3">Caption</h4>
              <p className="text-gray-400 text-lg mb-8">Ngắn gọn, thể hiện được sự phấn khích khi trải nghiệm sân bóng rổ "trên mây".</p>
              
              <h4 className="text-white font-bold text-xl mb-3">Hashtags</h4>
              <div className="flex flex-wrap gap-3">
                {['#levelfitnesscenter', '#levelbasketball', '#basketballvietnam', '#sanbongrotrencao', '#ballislife', '#phongtapcauguay'].map(tag => (
                  <span key={tag} className="bg-level-black text-level-orange px-4 py-2 rounded-full text-sm font-medium border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. TEAM CRITERIA */}
      <section className="min-h-screen flex items-center px-6 py-24 bg-level-gray">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <h2 className="font-display text-7xl md:text-[100px] mb-20 leading-[0.85]">
              TEAM <span className="text-level-orange">CRITERIA</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Vibe & Phong cách", desc: "Có gu thời trang bóng rổ riêng (Sneakerhead, Jersey limited...). Năng động, cool ngầu." },
              { num: "02", title: "Lifestyle & Social", desc: "Thường xuyên check-in tại sân, có lượt tương tác tốt trên mạng xã hội (Facebook/TikTok/Threads)." },
              { num: "03", title: "Câu chuyện", desc: "Ưu tiên cá nhân có câu chuyện truyền cảm hứng (từ newbie đến pro, giảm cân, trở lại sau chấn thương)." },
              { num: "04", title: "Kỹ năng", desc: "Tự tin trước ống kính, có kỹ thuật bóng rổ tốt để thực hiện các cú dứt điểm đẹp mắt." },
              { num: "05", title: "Nhân khẩu học", desc: "Chủ yếu là Gen Z và Millennials trẻ (18 - 30 tuổi). Địa bàn Hà Nội, Hội viên/Khách thuê sân tại The Nine." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-level-black p-8 rounded-2xl border-l-4 border-level-orange">
                <span className="font-display text-4xl text-gray-800 mb-4 block">{item.num}</span>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STORYTELLING ANGLES */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-6xl md:text-8xl mb-20 text-center">STORYTELLING <span className="text-level-orange">ANGLES</span></h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              { icon: <ShieldCheck/>, text: "\"Nếu bạn chán cảnh chơi sân ngoài trời bụi bặm và nóng bức...\"" },
              { icon: <Camera/>, text: "Đánh vào yếu tố \"Sân bóng rổ đẹp nhất để quay clip/check-in\" cho các Ballers quan tâm hình ảnh." },
              { icon: <PlayCircle/>, text: "Tập trung vào việc bảo vệ chấn thương nhờ mặt sàn chất lượng cao và quy trình phục hồi (Jacuzzi/Sauna)." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex items-center gap-6 bg-level-gray p-8 rounded-2xl">
                <div className="text-level-orange shrink-0">{item.icon}</div>
                <p className="text-xl md:text-2xl font-medium text-gray-200">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COLLABORATION MODELS */}
      <section className="min-h-screen flex items-center px-6 py-24 bg-level-gray">
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <h2 className="font-display text-7xl md:text-[100px] mb-20 leading-[0.85]">
              COLLABORATION<br/><span className="text-level-orange">MODELS</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="border border-gray-700 bg-level-black p-12 rounded-[2.5rem] hover:border-level-orange transition-colors group">
              <h3 className="font-display text-4xl md:text-5xl mb-8 text-white group-hover:text-level-orange transition-colors">01. TRAO ĐỔI (MIỄN PHÍ)</h3>
              <p className="text-gray-400 text-xl mb-8 leading-relaxed">MKT hỗ trợ chụp ảnh/quay video chuyên nghiệp và trả file thành phẩm chất lượng cao cho Team/Hội viên để họ làm thương hiệu cá nhân.</p>
              <div className="bg-level-gray p-6 rounded-2xl">
                <p className="text-white font-medium"><span className="text-level-orange font-bold">Đổi lại:</span> Level được quyền sử dụng hình ảnh/video cho mục đích quảng bá.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="border border-gray-700 bg-level-black p-12 rounded-[2.5rem] hover:border-level-orange transition-colors group">
              <h3 className="font-display text-4xl md:text-5xl mb-8 text-white group-hover:text-level-orange transition-colors">02. CÓ PHÍ / ƯU ĐÃI</h3>
              <p className="text-gray-400 text-xl mb-8 leading-relaxed">Trao đổi qua hình thức trả phí (theo số lượng thành viên/ buổi quay/ ấn phẩm,...).</p>
              <div className="bg-level-gray p-6 rounded-2xl">
                <p className="text-white font-medium"><span className="text-level-orange font-bold">Hoặc:</span> Tặng thẻ tập trải nghiệm (Gym/Bơi/...) hoặc Voucher giảm giá thuê sân.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-40 px-6 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-level-orange to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
          <FadeIn>
            <h2 className="font-display text-[100px] md:text-[140px] leading-[0.8] tracking-tighter">
              STEP ONTO<br/><span className="text-level-orange">THE COURT</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="space-y-8 lg:text-right">
            <p className="text-2xl md:text-3xl font-bold text-white max-w-md ml-auto uppercase leading-snug">
              Take your passion for basketball to the next level
            </p>
            <div className="text-gray-400 text-lg space-y-2">
              <p className="flex items-center lg:justify-end gap-3"><MapPin className="w-5 h-5 text-level-orange"/> Tầng 6 LFC The Nine Tower</p>
              <p>Số 09 Phạm Văn Đồng, P. Phú Diễn, Hà Nội</p>
            </div>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
}
