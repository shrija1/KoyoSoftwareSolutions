import React from 'react'
import './Services.css'
import ServiceTemplate from './ServiceTemplate'

function Services() {
    const items = [
        {
            classAdd: '',
            data_aos_delay: '100',
            icon: 'bxl-dribbble',
            title: 'Lorem Ipsum',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },
        {
            classAdd: 'mt-4 mt-md-0',
            data_aos_delay: '200',
            icon: 'bx-file',
            title: 'Sed ut perspiciatis',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        },
        {
            classAdd: 'mt-4 mt-lg-0',
            data_aos_delay: '300',
            icon: 'bx-tachometer',
            title: 'Magni Dolores',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        },
        {
            classAdd: 'mt-4',
            data_aos_delay: '100',
            icon: 'bx-world',
            title: 'Nemo Enim',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        },
        {
            classAdd: 'mt-4',
            data_aos_delay: '200',
            icon: 'bx-slideshow',
            title: 'Dele cardo',
            description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
        },
        {
            classAdd: 'mt-4',
            data_aos_delay: '300',
            icon: 'bx-arch',
            title: 'Divera don',
            description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
        }
    ]
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <p>Check our Services</p>
                </div>

                <div className="row">

                    {
                        items.map(item => <ServiceTemplate item={item} />)
                    }

                </div>

            </div>
        </section>
    )
}

export default Services
