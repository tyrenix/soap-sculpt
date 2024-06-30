'use client'

import {BenefitsComponent} from './components/Benefits'
import {HeroComponent} from './components/Hero'
import {MakingComponent} from './components/Making'
import {ProductsComponent} from './components/Products'
import {SubscriptionComponent} from './components/Subscription'
import {TestimonialsComponent} from './components/Testimonials'

export const PageView = () => {
    return (
        <>
            {/* <Seo title={t('hero.title')} description={t('hero.description')} /> */}
            <HeroComponent />
            <BenefitsComponent />
            <ProductsComponent />
            <MakingComponent />
            <TestimonialsComponent />
            <SubscriptionComponent />
        </>
    )
}
