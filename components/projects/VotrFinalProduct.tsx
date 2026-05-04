import { assetPath } from '@/lib/asset-path'

export default function VotrFinalProduct() {
  return (
    <div className="rounded-3xl overflow-hidden px-8 sm:px-14 py-10 flex flex-col md:flex-row items-center gap-8"
      style={{ background: 'linear-gradient(135deg, #F3F0FF 0%, #FAF0FF 50%, #F0F6FF 100%)' }}
    >
      {/* Left: text */}
      <div className="flex-1 min-w-0">
        <h2 className="font-display font-bold text-2xl sm:text-3xl gradient-text mb-6 leading-tight">
          Final Product - VOTRNET
        </h2>
        <p className="font-display font-bold text-xl sm:text-2xl leading-snug text-deep">
          Meet{' '}
          <span className="gradient-text">VOTRNET</span>
          {'\n'}your collaborative political hub -{' '}
          <span className="gradient-text">VOTR</span>
          {"'s built-in social platform to\nconnect, discuss, and create change"}
        </p>
      </div>

      {/* Right: product image */}
      <div className="flex-1 min-w-0 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath('/projects/votrnet/final-product.png')}
          alt="VOTRNET final product: multiple app screens showing the social platform"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  )
}
