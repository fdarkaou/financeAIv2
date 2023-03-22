<template>
    <div class="py-4">
                <div v-if="step === 'complete'" class="mockup-window border bg-base-300 px-4">

                    <div class="flex justify-center w-full">
                            <div class="flex flex-col justify-center items-center">
                            <div class="flex justify-center items-center">
                                <!--loading svg-->
                                <svg class="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div v-if="workoutplan" class="text-green-500 text-sm font-medium mt-2">
                                Je financieel plan is klaar!            
                            </div>
                            <div v-if="!workoutplan" class="text-green-500 text-sm font-medium mt-2">
                                Ons AI tool is bezig met het genereren van je financieel plan. Dit kan een even duren.            
                            </div>
                            </div>
                            
                    </div>
                    <div class="text-sm">
                        <p>Hey <b>{{ name }}</b>,</p>
                        <p>Je financieel plan wordt gemaakt op basis van deze inputs:</p>
                        <p><b>Je profiel: </b></p>
                        <ul class="list-decimal px-8">
                            <li><b>Naam: </b> {{ name }}</li>
                            <li><b>Doel: </b> {{ objective }}</li>
                            <li><b>Leeftijd: </b> {{ age }}</li>
                            <li><b>Verwachte leeftijd om op pensioen te gaan: </b> {{ retirement }}</li>
                        </ul>
                        <p><b>Financiële situatie: </b></p>
                        <ul class="list-decimal px-8">
                            <li><b>Professionele toestand: </b> {{ employment_status }}</li>
                            <li><b>Maandelijkse investeringen: </b> {{ monthly_investment }} €/maand</li>
                            <li><b>Maandelijks inkomen: </b> {{ monthly_income }} €/maand</li>
                        </ul>
                        <p><b>Beleggers variabelen</b></p>
                        <ul class="list-decimal px-8">
                            <li><b>Huidig portfolio: </b> {{ current_portfolio }}</li>
                            <li><b>Risico tolerantie: </b> {{ risk_tolerance }}</li>
                            <li><b>Reeds belegd bedrag: </b> {{ invested_amount }} €</li>
                            <li><b>Beleggers ervaring: </b> {{ invesment_experience }}</li>
                            <li><b>Beleggers horizon: </b> {{ investment_horizon }} jaar</li>
                        </ul>
                    </div>

                    <LoadingPage v-if="!financieel_plan" />
                    <p v-if="financieel_plan" v-html="formattedResponse"></p>


                    <div class="py-2 flex items-center">
                        <button @click="step = 1" class="btn">
                            Back to home
                        </button>
                    </div>

                </div>
                <transition name="scale">
                    <div v-if="step != 'complete'" class="mockup-window border bg-base-300 px-4">
                    <form>
				<!-- Top Navigation -->
				<div class="px-4">
					<div class="uppercase tracking-wide text-xs font-bold mb-1 leading-tight" v-text="`Step: ${step} of 3`"></div>
					<div class="flex flex-col md:flex-row md:items-center md:justify-between">
						<div class="flex-1">
							<div v-if="step === 1">
								<div class="text-lg font-bold leading-tight">Profiel</div>
							</div>
							
							<div v-if="step === 2">
								<div class="text-lg font-bold leading-tight">Financiële situatie</div>
							</div>

							<div v-if="step === 3">
								<div class="text-lg font-bold leading-tight">Beleggers variabelen</div>
							</div>
						</div>

						<div class="flex items-center md:w-64">
                                <progress class="progress progress-accent w-56" :value="parseInt(step / 3 * 100)" max="100"></progress>

							<div class="text-xs w-10 px-2" v-text="parseInt(step / 3 * 100) +'%'"></div>
						</div>
					</div>
                    <div class="divider"></div> 

				</div>
				<!-- /Top Navigation -->

				<!-- Step Content -->
				<div class="py-10">	
					<div v-if="step === 1">
                    <div class="flex flex-row">
                        <div class="w-1/2 px-2">
                            <div class="form-control">
                                <label for="name" class="font-bold uppercase text-xs">Wat is je naam?</label>
                                <label class="input-group">
                                    <span>Naam</span>
                                    <input v-model="name" type="text" placeholder="Tupac Shakur" class="input input-bordered" />
                                </label>
                            </div>
                            <div class="mb-5">
                                <label for="objective" class="font-bold uppercase text-xs">What is uw eind-doel?</label>
                                <select v-model="objective" 
                                class="select select-bordered w-full">
                                <option disabled selected>What is uw eind-doel?</option>
                                    <option value="Vermogensgroei">Vermogensgroei</option>
                                    <option value="Pensioenopbouw">Pensioenopbouw</option>
                                    <option value="Inkomensgeneratie">Inkomensgeneratie</option>
                                    <option value="Speculatie">Speculatie</option>
                                    <option value="Erfenisplanning">Erfenisplanning</option>
                                    <option value="Erfenisplanning">Niets</option>

                                </select>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <label for="age" class="font-bold uppercase text-xs">Wat is je leeftijd?</label>
                                </label>
                                <label class="input-group">
                                    <input v-model="age" type="number" placeholder="35" class="input input-bordered" />
                                    <span>jaar</span>
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <label for="retirement" class="font-bold uppercase text-xs">Wanneer wenst u op pensioen te gaan?</label>
                                </label>
                                <label class="input-group">
                                    <input v-model="retirement" type="number" placeholder="65" class="input input-bordered" />
                                    <span>jaar</span>
                                </label>
                            </div>
                        </div>  
                        <div class="w-1/2 px-2">
                        </div>
                        </div>
					</div>
					<div v-if="step === 2">
                            <div class="mb-5">
                                <label for="employment_status" class="font-bold uppercase text-xs">Professionele toestand?</label>
                                <select v-model="employment_status" 
                                class="select select-bordered w-full">
                                <option disabled selected>Professionele toestand?</option>
                                    <option value="Student">Student</option>
                                    <option value="Dealer">Dealer</option>
                                    <option value="Arbeider">Arbeider</option>
                                    <option value="Bedienden">Bedienden</option>
                                    <option value="Ondernemer">Ondernemer</option>
                                    <option value="Zelfstandige">Zelfstandige</option>
                                    <option value="Belegger">Belegger</option>
                                    <option value="Sjeik van Qatar">Sjeik van Qatar</option>
                                </select>
                            </div>	
                            <div class="form-control">
                                <label class="label">
                                    <label for="monthly_investment" class="font-bold uppercase text-xs">Hoeveel wenst u per maand te investeren?</label>
                                </label>
                                <label class="input-group">
                                    <input v-model="monthly_investment" type="number" placeholder="300" class="input input-bordered" />
                                    <span>€/maand</span>
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <label for="monthly_income" class="font-bold uppercase text-xs">Wat is uw maandelijks netto inkomen?</label>
                                </label>
                                <label class="input-group">
                                    <input v-model="monthly_income" type="number" placeholder="3000" class="input input-bordered" />
                                    <span>€/maand</span>
                                </label>
                            </div>						

					</div>
					<div v-if="step === 3">
                        <div class="form-control">
                            <label for="current_portfolio" class="font-bold uppercase text-xs">Wat zijn uw huidige investeringen?</label>
                            <input v-model="current_portfolio" type="text" placeholder="Bitcoin, ETFs, ..." class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label for="risk_tolerance" class="font-bold uppercase text-xs">Wat is uw risicotolerantie?</label>
                            <select v-model="risk_tolerance" 
                                class="select select-bordered w-full">
                                <option disabled selected>Wat is uw risicotolerantie?</option>
                                    <option value="Laag">Laag</option>
                                    <option value="Gemiddeld">Gemiddeld</option>
                                    <option value="Hoog">Hoog</option>
                                    <option value="Zeer hoog">Broer ik pak die risk!!</option>
                                </select>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <label for="invested_amount" class="font-bold uppercase text-xs">Hoeveel heeft u reeds belegd?</label>
                            </label>
                            <label class="input-group">
                                <input v-model="invested_amount" type="number" placeholder="3000" class="input input-bordered" />
                                <span>€</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label for="investment_experience" class="font-bold uppercase text-xs">Wat is uw beleggerservaring?</label>
                            <select v-model="investment_experience" 
                                class="select select-bordered w-full">
                                <option disabled selected>Wat is uw beleggerservaring?</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Gemiddeld">Gemiddeld</option>
                                    <option value="Expert">Expert</option>
                                </select>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <label for="investment_horizon" class="font-bold uppercase text-xs">Wat is uw beleggershorizon?</label>
                            </label>
                            <label class="input-group">
                                <input v-model="investment_horizon" type="number" placeholder="10" class="input input-bordered" />
                                <span>jaar</span>
                        </label>    
                        </div>

					</div>
				</div>
				<!-- / Step Content -->
            </form>
            		<!-- Bottom Navigation -->	
            			<div class="max-w-3xl mx-auto px-4 py-2">
                            <div class="flex justify-between">
                                <div class="w-1/2">
                                    <button
                                        v-if="step > 1"
                                        @click="step--"
                                        class="btn btn-warning">Previous</button>
                                </div>

                                <div class="w-1/2 text-right">
                                    <button
                                        v-if="step < 3"
                                        @click="step++"
                                        class="btn btn-success">Next</button>

                                    <button
                                    @click="onCompleteClick"
                                    v-if="step === 3"
                                    class="btn btn-info">
                                    Complete
                                    </button>
                                </div>
                            </div>
			            </div>
			</div>
            </transition>
	</div>
</template>

<script>
import LoadingPage from '@/components/unique/LoadingPage.vue'

export default {
    name: 'Simulation',
    components: {
        LoadingPage
    },
    data() {
        return {
            step: 1,
            name: null,
            objective: 'Vermogensgroei',
            age: null, 
            retirement: null,
            employment_status: 'Student',
            monthly_investment: null,
            monthly_income: null,
            current_portfolio: null,
            risk_tolerance: 'Laag',
            invested_amount: null,
            investment_experience: 'Beginner',
            investment_horizon: null,
            financieel_plan: null,            

               }
    },
    computed: {
    formattedResponse() {
      // Convert new lines to <br> tags to preserve line breaks
      const formatted = this.financieel_plan.response.replace(/\n/g, "<br>");
      return formatted;
    },
  },
  methods: {
    onCompleteClick() {
    this.sendPrompt();
    this.step = 'complete';
  },
    async sendPrompt() {
    try {
        const financialData = {
            name: this.name,
            objective: this.objective,
            age: this.age,
            retirement: this.retirement,
            employment_status: this.employment_status,
            monthly_investment: this.monthly_investment,
            monthly_income: this.monthly_income,
            current_portfolio: this.current_portfolio,
            risk_tolerance: this.risk_tolerance,
            invested_amount: this.invested_amount,
            investment_experience: this.investment_experience,
            investment_horizon: this.investment_horizon,
        };
        
        const res = await fetch('http://127.0.0.1:5001/api/prompt', {
            method: 'POST',
            body: JSON.stringify(financialData),
            headers: { 'Content-Type': 'application/json' },
            });
        
        const data = await res.json(); // extract JSON object from response body
        // console.log("response data: ", data);
        this.financieel_plan = data;

    } catch (err) {
        console.error(err);
    }
    }

}
}
</script>