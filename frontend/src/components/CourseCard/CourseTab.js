import React from 'react'
import './swiper-bundle.min.css'

function CourseTab() {
    return (
        <div class="courses-tabs-menu courses-active">
            <div class="swiper-container">
                <ul class="swiper-wrapper nav">
                    <li class="swiper-slide"><button class="active" data-bs-toggle="tab" data-bs-target="#tabs1">UI/UX Design</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs2">Development</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs3">Data Science</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs4">Business</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs5">Financial</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs6">Marketing</button></li>
                    <li class="swiper-slide"><button data-bs-toggle="tab" data-bs-target="#tabs7">Design</button></li>
                </ul>
            </div>

           
            <div class="swiper-button-next"><i class="icofont-rounded-right"></i></div>
            <div class="swiper-button-prev"><i class="icofont-rounded-left"></i></div>

            
        </div>
    )
}

export default CourseTab
