import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={15}
      color='181, 255, 200'
      outerAlpha={0.3}
      innerScale={0.5}
      outerScale={5}
      trailingSpeed={10}
      outerStyle={{
        border: '4px solid var(--cursor-color)'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.swiper',
        '.closebutton'
      ]}
      />
  )
}
