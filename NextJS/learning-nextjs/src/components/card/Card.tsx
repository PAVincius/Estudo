import Image from 'next/image'
import * as React from 'react';
import { useEffect,useState } from 'react'

type Image = {
  id: number
  created_at: string
  urls: string
  title: string
  likes: number
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Card({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
      <div className="relative w-30 h-60 rounded-lg aspect-auto overflow-hidden" >
        <Image
          alt=""
          src={image.urls}
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          className={cn(
            'rounded-lg',
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}/>
        <div className="absolute m-4 inset-0 z-10 flex">
          <h3 className="mt-2 text-white text-center self-center">{image.title}</h3>
        </div>
        <div className="absolute bg-pink-900 w-1/3 rounded-br-lg rounded-tl-lg a">
            <p className="mx-auto text-lg font-medium text-white">{image.likes}</p>
        </div>
      </div>
  )
}