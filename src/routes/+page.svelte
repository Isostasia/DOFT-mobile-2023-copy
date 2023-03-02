<script>
	// logic goes here
    let logo = 'logos/Official_logo_mejorado.svg';
    let autor = 'logos/Colaboracion_EJ2_blanco_footer.svg';
</script>

<!-- markup (zero or more items) goes here -->
    <!--HEADER-->
    <header>
      <nav class="flex flex-row flex-wrap justify-center items-center px-4">
        <div id="mobile-nav" class="flex flex-row flex-wrap justify-center items-center">
            <!--Button to offcanvas the nav list-->
            <button type="button" aria-disabled="true" tabindex="-1">
                <span><i class="fas fa-bars"></i></span>
            </button>
            <!--/Button-->
                <a class="h-auto" id="Logo" href="index.html">
                    <img class="h-16" src={logo} alt="Doft">
                </a>
            <!--Button to display the searchbox-->
            <button id="searchbox-toggler" aria-disabled="true" tabindex="-1">
                <span><i class="fas fa-search"></i></span>
            </button>
        </div>
        <!--Search Box-->
        <div id="search-box">
            <form role="search">
                <input type="search" placeholder="¿Qué buscas?" aria-label="Search">
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
        <!--/Search Box-->
        <!--Nav list offcanvased by the button-->
        <div id="off-canvas">
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
      <footer>
      <div>
        <div>
            <div>
                <ul>
                    <li><a href="#">Social-media</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#"><i class="fab fa-rocketchat"></i></a></li>
                    <li><a href="#"><i class="fas fa-envelope"></i></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a id="no-transform">©Doft 2023. Todos los derechos reservados. Powered by</a></li>
                    <li><a href="#"><img id="autor" class="h-4" src={autor} alt="EJ"></a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
    <!--/Footer-->

<style lang="postcss">
    /* styles go here */

    :global(:root){
        /*Aqui van las variables*/

    }

    a {
        height: fit-content;
        text-transform: uppercase;
    }

    header nav > *{
        height: fit-content;
    }

    #pc-nav > li {
        display: inline-block;
    }

    :global(html) {
        background-color: theme(colors.gray.400);
    }
</style>




