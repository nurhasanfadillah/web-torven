import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, ShoppingBag, Users, Award, CheckCircle } from 'lucide-react'

const socialProofItems = [
  { icon: ShoppingBag, label: 'Tas Terjual', value: '72,429' },
  { icon: Users, label: 'Klien di Layani', value: '1000+' },
  { icon: Award, label: 'Rating Toko', value: '4.9/5' },
  { icon: CheckCircle, label: 'Tahun Pengalaman', value: '5+' },
]

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Elektronik",
    text: "Tas custom untuk parcel akhir tahun kami hasilnya premium banget! Pelayanan ramah dan kirim cepat. Recommended!",
    avatar: "👨‍💼"
  },
  {
    name: "Siti Rahayu",
    role: "HRD PT Maju Mundur",
    text: "Kami pesan 200 pcs tas untuk goodie bag seminar. Desain sesuai request, bahan kuat, dan harga bersahabat. Terima kasih Torven!",
    avatar: "👩‍💼"
  },
  {
    name: "Ahmad Fauzi",
    role: "Ketua Komunitas",
    text: "Konsultasi design-nya sangat membantu. Hasil sablon rapi dan warna tajam. Pasti repeat order!",
    avatar: "👨‍🎨"
  },
  {
    name: "Dewi Lestari",
    role: "Owner Boutik",
    text: "Tas goodie bag untuk pernikahan hasilnya memuaskan! Bahannya tebal dan sablonan rapi.",
    avatar: "👩‍🦱"
  },
  {
    name: "Hendra Wijaya",
    role: "Direksi PT Berkah",
    text: "Sudah 3 kali repeat order untuk tas seminar. Kualitas konsisten dan selalu tepat waktu!",
    avatar: "👨‍💻"
  },
  {
    name: "Rina Amelia",
    role: "Event Organizer",
    text: "Pesan 150 pcs tas untuk workshop. Hasilnya exceed expectation! Worth it banget!",
    avatar: "👩‍🏫"
  }
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimoni" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {socialProofItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-glow-cyan mx-auto mb-3" />
              <p className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-glow-cyan text-sm font-semibold mb-4">
            Testimoni
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kepercayaan Anda adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glow-cyan to-glow-blue flex items-center justify-center">
                  <span className="text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-glow-cyan text-glow-cyan" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
