<?php include ('includes/header.php');?>

<section class="blog-main-section">
	<div class="container">
		<div class="row text-center">
			<div class="col-md-12">
				<h2 class="text-gradient-color">
					Pulsebot Blog
				</h2>
				<p class="text-white">
					Achieve more with forex education hub.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="blog-section">
	<div class="container">
		<div class="row g-4">
			<?php
				$repeatCount = 6;
				for ($i = 0; $i < $repeatCount; $i++) {
				    ?>
				    <div class="col-lg-4 col-md-6">
				        <div class="card blog-card">
				            <a href="blog-detail.php">
				                <img src="assets/img/what-is-expert-advisor.jpg" class="card-img-top" alt="...">
				            </a>
				            <div class="card-body blog-content">
				                <a href="blog-detail.php">
				                    <h5 class="card-title">
				                        How to Customize Your Brokerage Platform to Stand Out in a Crowded Market with YaPrime
				                    </h5>
				                </a>
				                <hr style="border: 1px solid #fff;">
				                <div class="meta_blog">
				                    <span>
				                        <i class="ri-calendar-line"></i> 
				                        11-11-2024            
				                    </span>
				                    <span>
				                        <i class="ri-user-line"></i>  
				                        Pulsebot
				                    </span>
				                </div>
				            </div>
				        </div>
				    </div>
			    <?php
				}
			?>
		</div>
	</div>
</section>

    
<?php include ('includes/footer.php');?>