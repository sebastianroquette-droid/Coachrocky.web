import React from 'react';
import Layout from '@/components/Layout.jsx';

const ShopPage = () => (
  <Layout
    title="Shop | Coach Rocky"
    description="Der Shop von Coach Rocky kommt bald."
    canonicalPath="/shop"
  >
    <section className="bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="t-h1 mb-6 text-foreground">Shop</h1>
        <p className="text-body-lg font-body text-foreground leading-relaxed">
          Kommt bald.
        </p>
      </div>
    </section>
  </Layout>
);

export default ShopPage;
