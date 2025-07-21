// src/app/views/home/home.component.ts
import { Component } from '@angular/core';

/* ============================================================
 *  DEMO: HOME-1
 * ============================================================ */
import { HeroComponent }            from '../home-1/components/hero/hero.component';
import { AboutComponent }           from '../home-1/components/about/about.component';
import { BlogsComponent }           from '../home-1/components/blogs/blogs.component';
import { BrandsComponent }          from '../home-1/components/brands/brands.component';
import { ServicesComponent }        from '../home-1/components/services/services.component';
import { PricingPlansComponent }    from '../home-1/components/pricing-plans/pricing-plans.component';
import { FaqsComponent }            from '../home-1/components/faqs/faqs.component';
import { TeamComponent }            from '../home-1/components/team/team.component';
import { TestimonialComponent }     from '../home-1/components/testimonial/testimonial.component';
import { ContactComponent }         from '../home-1/components/contact/contact.component';
import { WorkComponent }            from '../home-1/components/work/work.component';

/* ============================================================
 *  DEMO: HOME-2
 * ============================================================ */
import { Hero2Component }           from '../demo/home-2/components/hero-2/hero-2.component';
import { About2Component }          from '../demo/home-2/components/about-2/about-2.component';
import { Blogs2Component }          from '../demo/home-2/components/blogs-2/blogs-2.component';
import { CaseStudyComponent }       from '../demo/home-2/components/case-study/case-study.component';
import { Contact2Component }        from '../demo/home-2/components/contact-2/contact-2.component';
import { Cta2Component }            from '../demo/home-2/components/cta-2/cta-2.component';
import { Faq2Component }            from '../demo/home-2/components/faq-2/faq-2.component';
import { OurMissionComponent }      from '../demo/home-2/components/our-mission/our-mission.component';
import { Team2Component }           from '../demo/home-2/components/team-2/team-2.component';
import { Testimonial2Component }    from '../demo/home-2/components/testimonial-2/testimonial-2.component';

/* ============================================================
 *  DEMO: HOME-3
 * ============================================================ */
import { Hero3Component }           from '../demo/home-3/components/hero-3/hero-3.component';
import { About3Component }          from '../demo/home-3/components/about-3/about-3.component';
import { Blogs3Component }          from '../demo/home-3/components/blogs-3/blogs-3.component';
import { CaseStudy3Component }      from '../demo/home-3/components/case-study-3/case-study-3.component';
import { Contact3Component }        from '../demo/home-3/components/contact-3/contact-3.component';
import { Faq3Component }            from '../demo/home-3/components/faq-3/faq-3.component';
import { Service3Component }        from '../demo/home-3/components/service-3/service-3.component';
import { Team3Component }           from '../demo/home-3/components/team-3/team-3.component';
import { Testimonial3Component }    from '../demo/home-3/components/testimonial-3/testimonial-3.component';

/* ============================================================
 *  DEMO: HOME-4
 * ============================================================ */
import { Hero4Component }           from '../demo/home-4/components/hero-4/hero-4.component';
import { About4Component }          from '../demo/home-4/components/about-4/about-4.component';
import { Blogs4Component }          from '../demo/home-4/components/blogs-4/blogs-4.component';
import { CaseStudy4Component }      from '../demo/home-4/components/case-study-4/case-study-4.component';
import { Contact4Component }        from '../demo/home-4/components/contact-4/contact-4.component';
import { Service4Component }        from '../demo/home-4/components/service-4/service-4.component';
import { Team4Component }           from '../demo/home-4/components/team-4/team-4.component';
import { Testimonial4Component }    from '../demo/home-4/components/testimonial-4/testimonial-4.component';


import { GalleryComponent } from './components/gallery/gallery.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';

import { EstadoComponent } from './components/estado/estado.component';


@Component({
  selector   : 'app-home',
  standalone : true,
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss'],
  imports    : [
    /* home-1 */
    HeroComponent,
    AboutComponent,
    BlogsComponent,
    BrandsComponent,
    ServicesComponent,
    PricingPlansComponent,
    FaqsComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent,
    WorkComponent,

    /* home-2 */
    Hero2Component,
    About2Component,
    Blogs2Component,
    CaseStudyComponent,
    Contact2Component,
    Cta2Component,
    Faq2Component,
    OurMissionComponent,
    Team2Component,
    Testimonial2Component,

    /* home-3 */
    Hero3Component,
    About3Component,
    Blogs3Component,
    CaseStudy3Component,
    Contact3Component,
    Faq3Component,
    Service3Component,
    Team3Component,
    Testimonial3Component,

    /* home-4 */
    Hero4Component,
    About4Component,
    Blogs4Component,
    CaseStudy4Component,
    Contact4Component,
    Service4Component,
    Team4Component,
    Testimonial4Component,

    GalleryComponent,
    BeneficiosComponent,
    EstadoComponent
  ],
})
export class HomeComponent {}

