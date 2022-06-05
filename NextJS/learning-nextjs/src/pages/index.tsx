/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header/>
      <main>
       <div className="dark:bg-dark light:bg-neutral-50">
        
       </div>
      </main>
    </Layout>
  );
}
