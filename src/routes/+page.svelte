<script>
	// logic goes here
    let logo = 'logos/Official_logo_mejorado.svg';
    let autor = 'logos/Colaboracion_EJ2_blanco_footer.svg';
</script>

<!-- markup (zero or more items) goes here -->
    <!--HEADER-->
    <header>
        <nav class="flex flex-wrap justify-center items-center w-screen">
          <div id="mobile-nav" class="flex flex-wrap justify-between items-center">
              <!--Button to offcanvas the nav list-->
              <button type="button" class="btn-mobile" aria-disabled="true" tabindex="-1">
                  <span><i class="fas fa-bars"></i></span>
              </button>
              <!--/Button-->
                  <a class="h-auto" id="Logo" href="index.html">
                      <img class="h-16" src={logo} alt="Doft">
                  </a>
              <!--Button to display the searchbox-->
              <button id="searchbox-toggler" class="btn-mobile" aria-disabled="true" tabindex="-1">
                  <span><i class="fas fa-search"></i></span>
              </button>
          </div>
          <!--Search Box-->
          <div id="search-box" class="grid grid-rows-1 justify-center p-2">
              <form role="search">
                  <input type="search" class="input-mobile" placeholder="¿Qué buscas?" aria-label="Search">
                  <button type="submit" class="hidden"><i class="fas fa-search"></i></button>
              </form>
          </div>
          <!--/Search Box-->
          <!--Nav list offcanvased by the button-->
          <div id="off-canvas" class="hidden">
              <button class="hidden" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <ul id="pc-nav">
                  <li>
                      <a href="#">Estilo</a>
                  </li>
                  <li>
                      <a href="#">Personaliza</a>
                  </li>
                  <li>
                      <a href="#">Novedades</a>
                  </li>
              </ul>
          </div>
            <!--/Nav list-->
        </nav>
      </header>
      <!--/HEADER-->
      <!--JavaScript-->
      <!--Footer-->
        <footer class="flex flex-wrap text-white uppercase w-screen pt-6 px-3">
              <div class="w-1/2 flex justify-center items-center">
                  <ul>
                      <li><a href="#">Social-media</a></li>
                      <li><a href="#">Novedades</a></li>
                      <li><a href="#">Acerca de</a></li>
                      <li><a href="#">Ayuda</a></li>
                      <li><a href="#">Contacto</a></li>
                  </ul>
              </div>
              <div class="w-1/2 flex justify-center items-center">
                  <ul>
                      <li><a href="#"><i class="fab fa-rocketchat"></i></a></li>
                      <li><a href="#"><i class="fas fa-envelope"></i></a></li>
                  </ul>
              </div>
              <div class="w-full flex justify-center items-center pt-10 pb-6 gap-2">
                    <span class="normal-case text-xs">©Doft 2023. Todos los derechos reservados. Powered by</span>
                    <span><a href="#"><img id="autor" class="h-4" src={autor} alt="EJ"></a></span>
              </div>
      </footer>
      <!--/Footer-->

<style lang="postcss">
    /* styles go here */
    :global(html) {
      /*background-color: theme(colors.gray.300);*/
      font-family: Tajawal;
    }

    :global(:root){
        /*Aqui van las variables*/
        --primary-bg: #212529;
        --secondary-bg: #ced4da;
    }

    #mobile-nav {
        padding: .5rem 1.5rem;
    }

    #mobile-nav, #search-box {
        width: inherit;
    }

    #search-box {
        background-color: var(--secondary-bg);
    }

    #search-box input {
        width: 95vw;
    }

    nav a > img {
        height: 3rem;
    }

    button#searchbox-toggler/*, span.navbar-toggler-icon*/ {
        font-size: 1rem;
    }

    a {
        height: fit-content;
    }

    header nav > *{
        height: fit-content;
    }

    #pc-nav > li {
        display: inline-block;
    }

    footer {
        background-color: var(--primary-bg);
    }

    @media screen and (min-width: 992px) {
        #off-canvas {
            display: initial;
        }
    }
    
</style>