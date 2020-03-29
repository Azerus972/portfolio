<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Développeur Laravel / VueJS
                                    <span>(PHP / Javascript)</span>
                                </h1>
                                <p class="lead  text-white">Je suis disponible pour vous accompagner dans vos projets backend ou frontend que ce soit pour l'affichage
                                     de kpis à travers des dashboards ou à la création d'un MVP</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://www.mbpdelivery.fr"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-code">
                                         MVP réalisé
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-button-power" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Devops</h6>
                                    <p class="description mt-3">Mise en place de processus de déploiement d'applications,
                                        création de setups, assemblage de serveurs de calculs.</p>
                                    <div>
                                        <badge type="primary" rounded>SaltStack</badge>
                                        <badge type="primary" rounded>Shell</badge>
                                        <badge type="primary" rounded>Script</badge>
                                        <badge type="primary" rounded>FreshDesk</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">PHP / Laravel</h6>
                                    <p class="description mt-3">Je suis en mesure de récupérer des données en DB ou via une api
                                        de façon à formater la donnée pour de l'analytique.</p>
                                    <div>
                                        <badge type="success" rounded>PHP</badge>
                                        <badge type="success" rounded>Laravel</badge>
                                        <badge type="success" rounded>API</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Javascript / VueJS</h6>
                                    <p class="description mt-3">Restitution des données arrivant du Back-office ou d'une API
                                        à travers des cartes, des charts ect...</p>
                                    <div>
                                        <badge type="warning" rounded>Javascript</badge>
                                        <badge type="warning" rounded>Vuejs</badge>
                                        <badge type="warning" rounded>API</badge>
                                    </div>

                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                    
                        <div class="text-center">
                            <h4 class="display-4 mb-5 mt-5">J'utilise les technos suivantes</h4>
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4">
                                    <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Bootstrap 4 - Most popular front-end component library">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://flutter.dev/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Flutter">
                                        <img v-lazy="'img/theme/flutter.png'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                
                                <div class="col-lg-2 col-4">
                                    <a href="https://laravel.com/" data-toggle="tooltip"
                                       data-original-title="Laravel">
                                        <img v-lazy="'img/theme/laravel.png'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Vue.js - The progressive javascript framework">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.php.net/" target="_blank" data-toggle="tooltip"
                                       data-original-title="PHP">
                                        <img v-lazy="'img/theme/php.png'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://reactjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="React - A JavaScript library for building user interfaces">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
                    <div class="container container-lg">
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                            <img v-lazy="'img/theme/mbp.png'" class="card-img">
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                            <img v-lazy="'img/theme/mbpd.png'" class="card-img">
                    </div>
                </div>
                                <div class="col-md-4 mb-4 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                            <img v-lazy="'img/theme/hpi.png'" class="card-img">
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-laptop" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Réalisons votre projet !</h3>
                            <p>Vous avez une idée ou un cahier des charges ?  
                                contactez moi et nous discuterons afin de réaliser votre projet.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Je réalise des veilles technos quotidiennes</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Définition de la stack la plus adaptée</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">Développeur agile, nous serons toujours en contact !</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-4 text-white">Des interfaces modernes</h4>
                                <p class="text-white">En combinant VueJs et Laravel je suis en mesure de réaliser
                                    des applications intuitives et attractives.</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">VueJS</h5>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Laravel</h5>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">Qui suis-je ?</h2>
                        <p class="lead text-muted">Sans détours un geek passionné par le développement depuis toujours.</p>
                    </div>
                    <div class="col-md-6 col-lg-6 mb-6 mb-lg-0 mb-5">
                        <div class="px-4">
                            <img v-lazy="'img/theme/avatar.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Kévin Marous</span>
                                    <small class="h6 text-muted">Developpeur</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/Darkdedoom" type="success" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://github.com/Azerus972" type="success" icon="fa fa-github" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.linkedin.com/in/kevin-marous/" type="success" icon="fa fa-linkedin" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">Vous souhaitez consulter mon cv ?</h3>
                                <p class="lead text-white mt-3">Cliquez sur le bouton 
                                    vous pourrez ainsi le télécharger.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="#"
                                             type="white" block size="lg">
                                    Télécharger mon cv
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
