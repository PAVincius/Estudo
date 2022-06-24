/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import * as React from 'react';

import Card from '@/components/card/Card'
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export async function getServerProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )
  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data,
      date: new Date().toISOString(),
    },
  }
}

type Image = {
  id: number
  created_at: string
  urls: string
  title: string
  likes: number
}

type Date = {
 date: string
}

export default function HomePage({ images, date }: { images: Image[], date: Date }) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header/>
        <h1>{date}</h1>
        <div className="m-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
            {images.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
        </div>
    </Layout>
  );
}