import { assetPath } from '@/lib/asset-path'

export default function VotrWireframes() {
  return (
    <div
      className="rounded-3xl overflow-hidden px-8 sm:px-14 py-10 space-y-10"
      style={{ background: 'linear-gradient(135deg, #C8BCEE 0%, #D9CFFE 35%, #F9CFEA 70%, #C8E1FF 100%)' }}
    >
      {/* Section 1: Landing + Home Feed */}
      <div>
        <div className="flex gap-0 mb-4">
          <p className="text-deep font-bold text-sm w-[58%]">Landing &amp; Profile Creating:</p>
          <p className="text-deep font-bold text-sm w-[42%]">Home Feed &amp; Search &amp; Trend:</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath('/projects/votrnet/wireframe-top.png')}
          alt="Wireframes: Landing, Profile Creating, Home Feed, Search and Trend"
          className="w-full"
        />
      </div>

      {/* Section 2: Collaborative Board */}
      <div>
        <p className="text-deep font-bold text-sm mb-4">Collaborative Board:</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath('/projects/votrnet/wireframe-board.png')}
          alt="Wireframes: Collaborative Board full flow"
          className="w-full"
        />
      </div>

      {/* Section 3: Conversation + Profile */}
      <div>
        <div className="flex gap-0 mb-4">
          <p className="text-deep font-bold text-sm w-[72%]">Conversation &amp; Group Chat:</p>
          <p className="text-deep font-bold text-sm w-[28%]">Profile:</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath('/projects/votrnet/wireframe-chat.png')}
          alt="Wireframes: Conversation, Group Chat, and Profile"
          className="w-full"
        />
      </div>
    </div>
  )
}
