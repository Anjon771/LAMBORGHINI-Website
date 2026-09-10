import gsap from 'gsap';

// Explicit asset imports so Vite bundles & hashes images for GitHub Pages
import lamboImg from '../img/lamborghini.png';
import revueltoImg from '../img/revuelto.jpg';
import huracanImg from '../img/huracan.jpg';
import svjImg from '../img/svj.jpg';
import urusImg from '../img/urus.jpg';
import cockpitImg from '../img/cockpit.jpg';
import engineImg from '../img/engine.jpg';
import logoImg from '../img/logo.png';

/* ==========================================================
   AUTOMOBILI LAMBORGHINI — INTERACTIVE SHOWCASE ENGINE
   ========================================================== */

// --- 1. SUPERCAR DATABASE ---
const CARS_DATABASE = {
  gallardo: {
    id: 'gallardo',
    name: 'Gallardo LP560-4',
    series: "Sant'Agata Bolognese",
    badge: 'Naturally Aspirated V10',
    title: 'LAMBORGHINI',
    subtitle: 'GALLARDO LP560-4',
    desc: 'An undeniable benchmark in extreme supercar performance. Powered by a high-revving 5.2-liter naturally aspirated V10 pushing 560 CV through permanent all-wheel drive, engineering pure adrenaline.',
    image: lamboImg || './assets/img/lamborghini.png',
    accel: '3.7',
    speed: '325',
    power: '560',
    rpm: '8,000',
    blueprint: [
      { label: 'Displacement', val: '5,204 cm³ (317.6 cu in)' },
      { label: 'Engine Architecture', val: '90° V10, DOHC 40 Valves, IDS+MPI' },
      { label: 'Maximum Power', val: '560 CV (412 kW) @ 8,000 RPM' },
      { label: 'Maximum Torque', val: '540 Nm (398 lb-ft) @ 6,500 RPM' },
      { label: 'Transmission', val: '6-Speed Robotized e-Gear / Permanent AWD' },
      { label: 'Dry Weight', val: '1,410 kg (3,108 lbs)' },
      { label: 'Weight-to-Power Ratio', val: '2.52 kg/CV' },
      { label: 'Acceleration 0-100 km/h', val: '3.7 seconds' },
      { label: 'Acceleration 0-200 km/h', val: '11.8 seconds' },
      { label: 'Top Speed', val: '325 km/h (202 mph)' },
      { label: 'Braking 100-0 km/h', val: '32.5 meters' },
      { label: 'Brakes', val: 'Steel / Optional Carbon Ceramic (CCB)' }
    ]
  },
  revuelto: {
    id: 'revuelto',
    name: 'Revuelto V12 HPEV',
    series: 'Flagship Monofuselage',
    badge: 'High Performance Electrified Vehicle',
    title: 'LAMBORGHINI',
    subtitle: 'REVUELTO V12 HPEV',
    desc: 'The dawn of a new era. The first HPEV hybrid super sports car unites a 6.5L naturally aspirated V12 mid-engine with 3 electric axial-flux motors, outputting an unprecedented 1,015 CV.',
    image: revueltoImg || './assets/img/revuelto.jpg',
    accel: '2.5',
    speed: '>350',
    power: '1,015',
    rpm: '9,500',
    blueprint: [
      { label: 'Combustion Engine', val: '6,498 cm³ 60° Naturally Aspirated V12' },
      { label: 'Electric System', val: '3 Axial Flux E-Motors (2 Front, 1 Gearbox)' },
      { label: 'Total Output', val: '1,015 CV (747 kW) @ 9,250 RPM' },
      { label: 'Engine Torque', val: '725 Nm @ 6,750 RPM + 350 Nm Electric' },
      { label: 'Transmission', val: '8-Speed Transverse Dual-Clutch (DCT)' },
      { label: 'Chassis', val: 'Carbon-Fiber Monofuselage with Forged Front' },
      { label: 'Dry Weight', val: '1,772 kg (3,906 lbs)' },
      { label: 'Weight-to-Power Ratio', val: '1.75 kg/CV' },
      { label: 'Acceleration 0-100 km/h', val: '2.5 seconds' },
      { label: 'Acceleration 0-200 km/h', val: '< 7.0 seconds' },
      { label: 'Top Speed', val: '> 350 km/h (217 mph)' },
      { label: 'Braking 100-0 km/h', val: '30.0 meters (CCB Plus)' }
    ]
  },
  huracan: {
    id: 'huracan',
    name: 'Huracán STO',
    series: 'Squadra Corse Track DNA',
    badge: 'Super Trofeo Omologata',
    title: 'LAMBORGHINI',
    subtitle: 'HURACÁN STO',
    desc: 'Pure motorsport pedigree. Engineered with a lightweight Cofango front clamshell, shark fin stabilizer, adjustable rear aerodynamic wing, and rear-wheel drive track agility.',
    image: huracanImg || './assets/img/huracan.jpg',
    accel: '3.0',
    speed: '310',
    power: '640',
    rpm: '8,500',
    blueprint: [
      { label: 'Displacement', val: '5,204 cm³ (317.6 cu in)' },
      { label: 'Engine Architecture', val: '90° V10, Naturally Aspirated Titanium Valves' },
      { label: 'Maximum Power', val: '640 CV (470 kW) @ 8,000 RPM' },
      { label: 'Maximum Torque', val: '565 Nm (417 lb-ft) @ 6,500 RPM' },
      { label: 'Drivetrain', val: 'Rear-Wheel Drive (RWD) with Mechanical LSD' },
      { label: 'Transmission', val: '7-Speed Dual-Clutch (LDF) Shifting System' },
      { label: 'Body Construction', val: 'Over 75% Carbon Fiber Panels (Cofango)' },
      { label: 'Dry Weight', val: '1,339 kg (2,951 lbs)' },
      { label: 'Weight-to-Power Ratio', val: '2.09 kg/CV' },
      { label: 'Acceleration 0-100 km/h', val: '3.0 seconds' },
      { label: 'Acceleration 0-200 km/h', val: '9.0 seconds' },
      { label: 'Top Speed', val: '310 km/h (193 mph)' },
      { label: 'Aero Efficiency', val: '420 kg Downforce @ 280 km/h' }
    ]
  },
  svj: {
    id: 'svj',
    name: 'Aventador SVJ',
    series: 'ALA 2.0 Active Aero',
    badge: 'SuperVeloce Jota',
    title: 'LAMBORGHINI',
    subtitle: 'AVENTADOR SVJ',
    desc: 'The pinnacle of the Aventador dynasty. Conquered the legendary Nürburgring Nordschleife in 6:44.97 minutes with 770 CV, ALA 2.0 active aerodynamics, and rear-wheel steering.',
    image: svjImg || './assets/img/svj.jpg',
    accel: '2.8',
    speed: '>352',
    power: '770',
    rpm: '8,700',
    blueprint: [
      { label: 'Displacement', val: '6,498 cm³ 60° Naturally Aspirated V12' },
      { label: 'Maximum Power', val: '770 CV (566 kW) @ 8,500 RPM' },
      { label: 'Maximum Torque', val: '720 Nm (531 lb-ft) @ 6,750 RPM' },
      { label: 'Aerodynamics', val: 'ALA 2.0 with Active Flaps & Aero-Vectoring' },
      { label: 'Suspension', val: 'Pushrod Magneto-Rheological Active Dampers' },
      { label: 'Steering', val: 'LDS Dynamic Steering + Active Rear-Wheel Steering' },
      { label: 'Transmission', val: '7-Speed ISR (Independent Shifting Rods)' },
      { label: 'Dry Weight', val: '1,525 kg (3,362 lbs)' },
      { label: 'Weight-to-Power Ratio', val: '1.98 kg/CV' },
      { label: 'Acceleration 0-100 km/h', val: '2.8 seconds' },
      { label: 'Acceleration 0-200 km/h', val: '8.6 seconds' },
      { label: 'Top Speed', val: '> 352 km/h (219 mph)' },
      { label: 'Braking 100-0 km/h', val: '30.0 meters (Carbon Ceramic)' }
    ]
  },
  urus: {
    id: 'urus',
    name: 'Urus Performante',
    series: 'Pikes Peak Record',
    badge: 'Super Sport Utility Vehicle',
    title: 'LAMBORGHINI',
    subtitle: 'URUS PERFORMANTE',
    desc: 'Raising the bar of performance SUV dynamics. Featuring 666 CV twin-turbo V8, lowered steel spring suspension, carbon fiber bonnet and aerodynamic roof spoiler with dedicated Rally Mode.',
    image: urusImg || './assets/img/urus.jpg',
    accel: '3.3',
    speed: '306',
    power: '666',
    rpm: '6,800',
    blueprint: [
      { label: 'Displacement', val: '3,996 cm³ (243.8 cu in)' },
      { label: 'Engine Architecture', val: '90° Twin-Turbo V8 with Twin-Scroll Turbos' },
      { label: 'Maximum Power', val: '666 CV (490 kW) @ 6,000 RPM' },
      { label: 'Maximum Torque', val: '850 Nm (627 lb-ft) @ 2,300 - 4,500 RPM' },
      { label: 'Transmission', val: '8-Speed Automatic with Torque Converter' },
      { label: 'Four-Wheel Drive', val: 'Permanent 4WD with Active Torque Vectoring' },
      { label: 'Chassis', val: 'Lowered Steel Springs (-20mm), Track +16mm' },
      { label: 'Curb Weight', val: '2,150 kg (4,740 lbs) (-47kg vs standard)' },
      { label: 'Weight-to-Power Ratio', val: '3.23 kg/CV' },
      { label: 'Acceleration 0-100 km/h', val: '3.3 seconds' },
      { label: 'Top Speed', val: '306 km/h (190 mph)' },
      { label: 'Downforce Increase', val: '+38% Rear Downforce via Carbon Fin' }
    ]
  }
};

let currentSelectedModel = 'gallardo';

// --- 2. MOBILE NAVIGATION & SMOOTH SCROLL ---
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('show');
    });
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav__link[href*="${sectionId}"]`);
      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });
}

// --- 3. HERO SHOWROOM INTERACTIVE MODEL SWITCHER ---
function initHeroShowroom() {
  const pills = document.querySelectorAll('.model-pill');
  const imgElement = document.getElementById('hero-car-image');
  const seriesElement = document.getElementById('hero-model-series');
  const badgeElement = document.getElementById('hero-model-badge');
  const titleElement = document.getElementById('hero-car-title');
  const descElement = document.getElementById('hero-car-desc');

  const hudAccel = document.getElementById('hud-accel');
  const hudSpeed = document.getElementById('hud-speed');
  const hudPower = document.getElementById('hud-power');
  const hudRpm = document.getElementById('hud-rpm');

  function switchModel(modelKey) {
    const data = CARS_DATABASE[modelKey];
    if (!data) return;
    currentSelectedModel = modelKey;

    // Update active pill
    pills.forEach(p => p.classList.toggle('active', p.dataset.model === modelKey));

    // GSAP animated transition
    gsap.to(imgElement, {
      opacity: 0,
      x: -40,
      scale: 0.95,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        imgElement.src = data.image;
        imgElement.alt = data.name;

        // Update Text
        seriesElement.textContent = data.series;
        badgeElement.textContent = data.badge;
        titleElement.innerHTML = `${data.title}<br><span id="hero-car-subtitle">${data.subtitle}</span>`;
        descElement.textContent = data.desc;

        // Update HUD
        hudAccel.innerHTML = `${data.accel}<span class="telemetry-unit">s</span>`;
        hudSpeed.innerHTML = `${data.speed}<span class="telemetry-unit">km/h</span>`;
        hudPower.innerHTML = `${data.power}<span class="telemetry-unit">CV</span>`;
        hudRpm.innerHTML = `${data.rpm}<span class="telemetry-unit">rpm</span>`;

        gsap.to(imgElement, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out'
        });

        // Flash HUD cards
        gsap.fromTo('.telemetry-card', 
          { y: 8, opacity: 0.5 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power1.out' }
        );
      }
    });
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const model = pill.dataset.model;
      if (model && model !== currentSelectedModel) {
        switchModel(model);
      }
    });
  });

  // Hero Quick Specs Button
  const heroSpecsBtn = document.getElementById('hero-btn-specs');
  if (heroSpecsBtn) {
    heroSpecsBtn.addEventListener('click', () => {
      openSpecsModal(currentSelectedModel);
    });
  }

  // Hero Initial Load Animation
  gsap.from('.hero__name', { opacity: 0, y: 30, duration: 1, delay: 0.2 });
  gsap.from('.hero__desc', { opacity: 0, y: 20, duration: 1, delay: 0.4 });
  gsap.from('.telemetry-card', { opacity: 0, y: 20, duration: 0.8, delay: 0.6, stagger: 0.1 });
  gsap.from('#hero-car-wrap', { opacity: 0, scale: 0.9, duration: 1, delay: 0.3 });
}

// --- 4. WEB AUDIO V12 ENGINE SOUND SYNTHESIZER ---
let audioCtx = null;
let isEngineRunning = false;
let isRevving = false;
let currentRpm = 0;
let targetRpm = 0;
let rpmAnimationId = null;

// Audio Graph Nodes
let masterGain = null;
let subOsc = null;
let mainOsc1 = null;
let mainOsc2 = null;
let noiseNode = null;
let filterNode = null;
let distortionNode = null;

function makeDistortionCurve(amount = 20) {
  const k = amount;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

function initAudioContext() {
  if (audioCtx) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0, audioCtx.currentTime);

  filterNode = audioCtx.createBiquadFilter();
  filterNode.type = 'lowpass';
  filterNode.frequency.setValueAtTime(160, audioCtx.currentTime);
  filterNode.Q.setValueAtTime(4.5, audioCtx.currentTime);

  distortionNode = audioCtx.createWaveShaper();
  distortionNode.curve = makeDistortionCurve(15);
  distortionNode.oversample = '2x';

  // Sub bass oscillator (chassis rumble)
  subOsc = audioCtx.createOscillator();
  subOsc.type = 'sawtooth';
  subOsc.frequency.setValueAtTime(32, audioCtx.currentTime);

  // Main high-frequency twin V12 harmonics
  mainOsc1 = audioCtx.createOscillator();
  mainOsc1.type = 'sawtooth';
  mainOsc1.frequency.setValueAtTime(65, audioCtx.currentTime);

  mainOsc2 = audioCtx.createOscillator();
  mainOsc2.type = 'triangle';
  mainOsc2.frequency.setValueAtTime(130, audioCtx.currentTime);

  // Connections
  subOsc.connect(filterNode);
  mainOsc1.connect(filterNode);
  mainOsc2.connect(filterNode);

  filterNode.connect(distortionNode);
  distortionNode.connect(masterGain);
  masterGain.connect(audioCtx.destination);

  subOsc.start();
  mainOsc1.start();
  mainOsc2.start();
}

function startEngine() {
  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isEngineRunning = true;
  targetRpm = 1000; // Idle RPM

  // Smooth fade-in
  masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
  masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
  masterGain.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 0.6);

  updateAudioFrequencies(1000);

  // UI state
  const startBtn = document.getElementById('fighter-start-btn');
  const startLabel = document.getElementById('fighter-btn-label');
  const pedalBtn = document.getElementById('rev-pedal-btn');
  const statusTag = document.getElementById('synth-status-tag');
  const headerSoundBtn = document.getElementById('sound-toggle-btn');
  const soundBtnText = document.getElementById('sound-btn-text');

  if (startBtn) startBtn.classList.add('running');
  if (startLabel) startLabel.textContent = 'Engine Active (Click to Stop)';
  if (pedalBtn) pedalBtn.removeAttribute('disabled');
  if (statusTag) {
    statusTag.textContent = 'Idling at 1,000 RPM';
    statusTag.classList.add('badge--yellow');
  }
  if (headerSoundBtn) headerSoundBtn.classList.add('playing');
  if (soundBtnText) soundBtnText.textContent = 'V12 Active';

  startRpmLoop();
}

function stopEngine() {
  isEngineRunning = false;
  targetRpm = 0;

  if (masterGain && audioCtx) {
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
  }

  const startBtn = document.getElementById('fighter-start-btn');
  const startLabel = document.getElementById('fighter-btn-label');
  const pedalBtn = document.getElementById('rev-pedal-btn');
  const statusTag = document.getElementById('synth-status-tag');
  const headerSoundBtn = document.getElementById('sound-toggle-btn');
  const soundBtnText = document.getElementById('sound-btn-text');

  if (startBtn) startBtn.classList.remove('running');
  if (startLabel) startLabel.textContent = 'Flip & Start Engine';
  if (pedalBtn) pedalBtn.setAttribute('disabled', 'true');
  if (statusTag) {
    statusTag.textContent = 'Engine Off';
    statusTag.classList.remove('badge--yellow');
  }
  if (headerSoundBtn) headerSoundBtn.classList.remove('playing');
  if (soundBtnText) soundBtnText.textContent = 'V12 Sound';
}

function updateAudioFrequencies(rpm) {
  if (!audioCtx || !isEngineRunning) return;
  const time = audioCtx.currentTime + 0.05;

  // Map RPM to V12 audio acoustic harmonics
  // A V12 at 1,000 RPM fires 100 pulses/sec. At 9,000 RPM fires 900 pulses/sec.
  const fundamental = 25 + (rpm / 9000) * 160;
  const harmonic1 = fundamental * 2;
  const harmonic2 = fundamental * 3;

  subOsc.frequency.setTargetAtTime(fundamental, time, 0.04);
  mainOsc1.frequency.setTargetAtTime(harmonic1, time, 0.04);
  mainOsc2.frequency.setTargetAtTime(harmonic2, time, 0.04);

  // Filter cutoff opens aggressively with RPM
  const cutoff = 150 + Math.pow(rpm / 9000, 2) * 3800;
  filterNode.frequency.setTargetAtTime(cutoff, time, 0.04);

  // Volume swells dynamically with throttle
  const targetGain = isRevving ? 0.65 : 0.28;
  masterGain.gain.setTargetAtTime(targetGain, time, 0.04);
}

function triggerExhaustPop() {
  const flameL = document.getElementById('flame-left');
  const flameR = document.getElementById('flame-right');
  if (flameL && flameR) {
    flameL.classList.add('active');
    flameR.classList.add('active');
    setTimeout(() => {
      flameL.classList.remove('active');
      flameR.classList.remove('active');
    }, 120);
  }
}

function startRpmLoop() {
  if (rpmAnimationId) cancelAnimationFrame(rpmAnimationId);

  const rpmDisplay = document.getElementById('synth-rpm-display');
  const gearDisplay = document.getElementById('synth-gear-display');
  const needle = document.getElementById('tacho-needle');
  const arcProgress = document.getElementById('tacho-progress-path');

  function tick() {
    if (isEngineRunning) {
      if (isRevving) {
        targetRpm = 8900;
        // Smooth revving acceleration
        currentRpm += (targetRpm - currentRpm) * 0.08;
      } else {
        targetRpm = 1000;
        const prevRpm = currentRpm;
        currentRpm += (targetRpm - currentRpm) * 0.06;

        // Exhaust backfire pop when throttle drops from high RPM
        if (prevRpm > 4500 && currentRpm < prevRpm - 200 && Math.random() > 0.65) {
          triggerExhaustPop();
        }
      }
    } else {
      currentRpm += (0 - currentRpm) * 0.1;
      if (currentRpm < 10) currentRpm = 0;
    }

    // Update Tachometer UI
    const clampedRpm = Math.max(0, Math.round(currentRpm));
    if (rpmDisplay) {
      rpmDisplay.textContent = clampedRpm.toLocaleString();
    }

    // Gear indicator simulation
    if (gearDisplay) {
      if (!isEngineRunning) gearDisplay.textContent = 'GEAR: P';
      else if (clampedRpm < 1500) gearDisplay.textContent = 'GEAR: N (IDLE)';
      else if (clampedRpm < 3200) gearDisplay.textContent = 'GEAR: 1';
      else if (clampedRpm < 5500) gearDisplay.textContent = 'GEAR: 2';
      else if (clampedRpm < 7500) gearDisplay.textContent = 'GEAR: 3';
      else gearDisplay.textContent = 'GEAR: 4 (REDLINE)';
    }

    // Needle Angle: -125deg (0 RPM) to +45deg (9,500 RPM)
    const ratio = Math.min(1, clampedRpm / 9500);
    const needleAngle = -125 + ratio * 170;
    if (needle) {
      needle.setAttribute('transform', `rotate(${needleAngle} 130 140)`);
    }

    // Progress Arc dashoffset
    if (arcProgress) {
      const maxOffset = 380;
      const offset = maxOffset - ratio * maxOffset;
      arcProgress.style.strokeDashoffset = offset;
    }

    updateAudioFrequencies(currentRpm);

    if (isEngineRunning || currentRpm > 0) {
      rpmAnimationId = requestAnimationFrame(tick);
    }
  }

  rpmAnimationId = requestAnimationFrame(tick);
}

function initSoundExperience() {
  const startBtn = document.getElementById('fighter-start-btn');
  const pedalBtn = document.getElementById('rev-pedal-btn');
  const headerSoundBtn = document.getElementById('sound-toggle-btn');
  const heroSoundCta = document.getElementById('hero-cta-sound');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (!isEngineRunning) startEngine();
      else stopEngine();
    });
  }

  if (headerSoundBtn) {
    headerSoundBtn.addEventListener('click', () => {
      if (!isEngineRunning) {
        startEngine();
        document.getElementById('sound').scrollIntoView({ behavior: 'smooth' });
      } else {
        stopEngine();
      }
    });
  }

  if (heroSoundCta) {
    heroSoundCta.addEventListener('click', () => {
      if (!isEngineRunning) startEngine();
    });
  }

  // Rev pedal events (touch + mouse)
  if (pedalBtn) {
    const startRev = (e) => {
      e.preventDefault();
      if (!isEngineRunning) return;
      isRevving = true;
      pedalBtn.classList.add('holding');
    };

    const stopRev = (e) => {
      e.preventDefault();
      isRevving = false;
      pedalBtn.classList.remove('holding');
    };

    pedalBtn.addEventListener('mousedown', startRev);
    window.addEventListener('mouseup', stopRev);
    pedalBtn.addEventListener('touchstart', startRev, { passive: false });
    window.addEventListener('touchend', stopRev);
  }

  // Spacebar rev accelerator shortcut
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      if (!isEngineRunning) startEngine();
      isRevving = true;
      if (pedalBtn) pedalBtn.classList.add('holding');
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      isRevving = false;
      if (pedalBtn) pedalBtn.classList.remove('holding');
    }
  });
}

// --- 5. ALA AERODYNAMICS WIND TUNNEL SIMULATOR ---
function initAlaSimulator() {
  const canvas = document.getElementById('alaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let currentAeroMode = 'downforce';
  let currentCarKey = 'gallardo';

  const modeButtons = document.querySelectorAll('.ala-mode-btn');
  const wingStatus = document.getElementById('ala-wing-status');
  const downforceVal = document.getElementById('ala-downforce-val');
  const dragVal = document.getElementById('ala-drag-val');
  const lateralVal = document.getElementById('ala-lateral-val');
  const modelPills = document.querySelectorAll('.ala-model-pill');
  const realCarImg = document.getElementById('ala-real-car-img');
  const modelTag = document.getElementById('ala-model-tag');
  const pressureHalo = document.getElementById('ala-pressure-halo');

  // Real Supercars Aerodynamics & Telemetry Specifications
  const carAeroData = {
    gallardo: {
      name: 'Gallardo LP560-4',
      image: lamboImg || './assets/img/lamborghini.png',
      tag: 'GALLARDO LP560-4 • AERO PROFILE',
      isCutout: true,
      modes: {
        downforce: { downforce: '340 kg', drag: '0.35 Cd', lateral: '1.70 G', wing: 'Fixed Aero: High Downforce Setup' },
        lowdrag: { downforce: '140 kg', drag: '0.31 Cd', lateral: '1.40 G', wing: 'Low Drag High-Speed Velocity Mode' },
        vectoring: { downforce: '290 kg', drag: '0.33 Cd', lateral: '1.80 G', wing: 'Mechanical Aero Yaw Balancing' }
      }
    },
    svj: {
      name: 'Aventador SVJ',
      image: svjImg || './assets/img/svj.jpg',
      tag: 'AVENTADOR SVJ • ALA 2.0 ACTIVE AERO',
      isCutout: false,
      modes: {
        downforce: { downforce: '490 kg', drag: '0.38 Cd', lateral: '1.85 G', wing: 'Flaps: Closed (Max Downforce)' },
        lowdrag: { downforce: '165 kg', drag: '0.26 Cd', lateral: '1.45 G', wing: 'Flaps: Open (Low Drag Mode)' },
        vectoring: { downforce: '380 kg', drag: '0.32 Cd', lateral: '1.95 G', wing: 'Vectoring: Inner Flap Closed, Outer Open' }
      }
    },
    huracan: {
      name: 'Huracán STO',
      image: huracanImg || './assets/img/huracan.jpg',
      tag: 'HURACÁN STO • COFANGO TRACK AERO',
      isCutout: false,
      modes: {
        downforce: { downforce: '420 kg', drag: '0.36 Cd', lateral: '1.80 G', wing: 'Wing Angle: High Attack (420kg Downforce)' },
        lowdrag: { downforce: '180 kg', drag: '0.28 Cd', lateral: '1.50 G', wing: 'Wing Angle: Minimum Incline (Top Speed)' },
        vectoring: { downforce: '350 kg', drag: '0.31 Cd', lateral: '1.88 G', wing: 'Yaw Angle Aero Stabilizer Active' }
      }
    },
    revuelto: {
      name: 'Revuelto V12 HPEV',
      image: revueltoImg || './assets/img/revuelto.jpg',
      tag: 'REVUELTO V12 • ACTIVE ELECTRICAL FLAPS',
      isCutout: false,
      modes: {
        downforce: { downforce: '510 kg', drag: '0.34 Cd', lateral: '1.90 G', wing: 'High Performance Mode (+61% Rear Downforce)' },
        lowdrag: { downforce: '190 kg', drag: '0.25 Cd', lateral: '1.48 G', wing: 'Low Resistance High-Speed Cruise Mode' },
        vectoring: { downforce: '410 kg', drag: '0.30 Cd', lateral: '2.00 G', wing: 'Torque-Vectoring + Active Flap Assist' }
      }
    },
    urus: {
      name: 'Urus Performante',
      image: urusImg || './assets/img/urus.jpg',
      tag: 'URUS PERFORMANTE • SUV ROOF SPOILER',
      isCutout: false,
      modes: {
        downforce: { downforce: '280 kg', drag: '0.37 Cd', lateral: '1.55 G', wing: 'Aero Spoiler: High Downforce +38%' },
        lowdrag: { downforce: '120 kg', drag: '0.33 Cd', lateral: '1.30 G', wing: 'Low Drag Highway Aerodynamic Flow' },
        vectoring: { downforce: '230 kg', drag: '0.35 Cd', lateral: '1.65 G', wing: 'Rally Mode Dynamic Aero Calibration' }
      }
    }
  };

  function updateTelemetryUI() {
    const carData = carAeroData[currentCarKey] || carAeroData.gallardo;
    const modeData = carData.modes[currentAeroMode];
    if (!modeData) return;

    if (wingStatus) wingStatus.textContent = modeData.wing;
    if (downforceVal) downforceVal.textContent = modeData.downforce;
    if (dragVal) dragVal.textContent = modeData.drag;
    if (lateralVal) lateralVal.textContent = modeData.lateral;
    if (modelTag) modelTag.textContent = carData.tag;

    if (pressureHalo) {
      if (currentAeroMode === 'downforce') {
        pressureHalo.style.background = 'radial-gradient(ellipse at center, rgba(239, 213, 12, 0.2) 0%, transparent 70%)';
      } else if (currentAeroMode === 'lowdrag') {
        pressureHalo.style.background = 'radial-gradient(ellipse at center, rgba(0, 229, 255, 0.2) 0%, transparent 70%)';
      } else {
        pressureHalo.style.background = 'radial-gradient(ellipse at center, rgba(0, 230, 118, 0.2) 0%, transparent 70%)';
      }
    }
  }

  // Model switching handler
  modelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const carKey = pill.dataset.car;
      if (!carKey || !carAeroData[carKey] || carKey === currentCarKey) return;

      modelPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCarKey = carKey;

      if (realCarImg) {
        realCarImg.classList.add('switching');
        setTimeout(() => {
          realCarImg.src = carAeroData[carKey].image;
          realCarImg.alt = carAeroData[carKey].name + ' Wind Tunnel Test';
          if (!carAeroData[carKey].isCutout) {
            realCarImg.classList.add('photo-blend');
          } else {
            realCarImg.classList.remove('photo-blend');
          }
          realCarImg.classList.remove('switching');
        }, 160);
      }

      updateTelemetryUI();
    });
  });

  function resize() {
    if (!canvas || !canvas.parentElement) return;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // High fidelity wind tunnel streamlines
  const particles = [];
  const PARTICLE_COUNT = 60;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * (canvas.width || 400),
      y: Math.random() * (canvas.height || 300),
      speed: 4 + Math.random() * 5,
      length: 20 + Math.random() * 35,
      alpha: 0.25 + Math.random() * 0.65,
      thickness: 1 + Math.random() * 1.5
    });
  }

  function drawAero() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;
    const carCenterX = w * 0.5;
    const carCenterY = h * 0.58;

    // Render Streamlines flowing across the real car
    particles.forEach(p => {
      p.x += p.speed;
      if (p.x > w + 50) {
        p.x = -50;
        p.y = Math.random() * h;
        p.speed = 4 + Math.random() * 5;
      }

      // Airflow deflection math over real car contours
      let targetY = p.y;
      const distFromCarX = p.x - carCenterX;
      const carBoundsX = w * 0.38;

      if (Math.abs(distFromCarX) < carBoundsX) {
        // Streamlines crossing the car
        const normX = distFromCarX / carBoundsX; // -1 at front to +1 at rear

        if (p.y < carCenterY + 25 && p.y > carCenterY - 110) {
          // Upper aerodynamic flow
          const liftProfile = Math.cos(normX * Math.PI * 0.5);
          if (currentAeroMode === 'downforce') {
            // Front splitter creates initial lift, flows over roof, and forces down sharply over rear wing
            if (normX < -0.4) targetY -= 18 * liftProfile;
            else if (normX < 0.2) targetY -= 36 * liftProfile;
            else targetY -= 15 + (1 - normX) * 12; // Downforce depression
          } else if (currentAeroMode === 'lowdrag') {
            // Straight slippery streamline
            targetY -= 22 * liftProfile;
          } else if (currentAeroMode === 'vectoring') {
            // Asymmetric aero-vectoring wave
            targetY -= 28 * liftProfile + Math.sin((p.x + Date.now() * 0.005) * 0.05) * 8;
          }
        } else if (p.y >= carCenterY + 25 && p.y < carCenterY + 70) {
          // Ground effect Venturi underbody suction airflow
          targetY += (currentAeroMode === 'downforce' ? 6 : 2);
        }
      }

      // Render curved aerodynamic streamline segment
      ctx.beginPath();
      ctx.moveTo(p.x, targetY);
      ctx.lineTo(p.x - p.length, p.y);

      if (currentAeroMode === 'downforce') {
        ctx.strokeStyle = `rgba(239, 213, 12, ${p.alpha})`;
      } else if (currentAeroMode === 'lowdrag') {
        ctx.strokeStyle = `rgba(0, 229, 255, ${p.alpha})`;
      } else {
        ctx.strokeStyle = `rgba(0, 230, 118, ${p.alpha})`;
      }

      ctx.lineWidth = p.thickness;
      ctx.lineCap = 'round';
      ctx.stroke();
    });

    // Dynamic Pressure Heatmap callouts on real car
    ctx.save();
    if (currentAeroMode === 'downforce') {
      // High pressure zone on rear wing
      const wingX = carCenterX + w * 0.28;
      const wingY = carCenterY - 35;
      const wingGrad = ctx.createRadialGradient(wingX, wingY, 0, wingX, wingY, 28);
      wingGrad.addColorStop(0, 'rgba(239, 213, 12, 0.45)');
      wingGrad.addColorStop(1, 'rgba(239, 213, 12, 0)');
      ctx.fillStyle = wingGrad;
      ctx.beginPath();
      ctx.arc(wingX, wingY, 28, 0, Math.PI * 2);
      ctx.fill();

      // Downforce vectors on rear wing
      ctx.strokeStyle = 'rgba(239, 213, 12, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(wingX, wingY - 14);
      ctx.lineTo(wingX, wingY + 12);
      ctx.lineTo(wingX - 4, wingY + 7);
      ctx.moveTo(wingX, wingY + 12);
      ctx.lineTo(wingX + 4, wingY + 7);
      ctx.stroke();
    } else if (currentAeroMode === 'vectoring') {
      // Asymmetric aero vectoring indicator
      const wingX = carCenterX + w * 0.28;
      const wingY = carCenterY - 35;
      ctx.strokeStyle = 'rgba(0, 230, 118, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(wingX, wingY, 18, -Math.PI * 0.5, Math.PI * 0.5);
      ctx.stroke();
    }
    ctx.restore();

    requestAnimationFrame(drawAero);
  }

  drawAero();

  // Mode button click handling
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAeroMode = btn.dataset.mode;
      updateTelemetryUI();
    });
  });

  // Initial UI sync
  updateTelemetryUI();
}

// --- 6. AD PERSONAM CUSTOMIZER (CONFIGURATOR) ---
function initConfigurator() {
  const swatches = document.querySelectorAll('.color-swatch');
  const finishBtns = document.querySelectorAll('.finish-btn');
  const wheelBtns = document.querySelectorAll('.wheel-btn');
  const caliperSwatches = document.querySelectorAll('.caliper-swatch');

  const studioImg = document.getElementById('studio-car-img');
  const studioGlow = document.getElementById('studio-lighting-glow');
  const colorLabel = document.getElementById('studio-color-label');
  const wheelLabel = document.getElementById('studio-wheel-label');
  const codeLabel = document.getElementById('studio-build-code');
  const paintVal = document.getElementById('label-paint-val');
  const finishVal = document.getElementById('label-finish-val');
  const wheelVal = document.getElementById('label-wheel-val');
  const caliperVal = document.getElementById('label-caliper-val');

  let activeColor = 'Giallo Inti';
  let activeFinish = 'Gloss Metallic';
  let activeWheel = 'Leirion Forged 20"';
  let activeCaliper = 'Giallo';

  function updateVisuals(colorName, hue, brightness, grayscale, hex) {
    activeColor = colorName;
    colorLabel.textContent = `${colorName} (${activeFinish})`;
    paintVal.textContent = colorName;
    studioGlow.style.background = `radial-gradient(ellipse at center, ${hex}40 0%, transparent 70%)`;

    // Apply filter dynamically on canvas/image
    let filterString = '';
    if (grayscale) {
      filterString += `grayscale(1) `;
    } else if (hue) {
      filterString += `hue-rotate(${hue}deg) `;
    }
    if (brightness) {
      filterString += `brightness(${brightness}) `;
    }

    if (activeFinish === 'matte') {
      filterString += 'contrast(0.9) saturate(0.9)';
    } else if (activeFinish === 'carbon') {
      filterString += 'contrast(1.2) brightness(0.7)';
    }

    studioImg.style.filter = filterString || 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.95))';
    generateBuildCode();
  }

  function generateBuildCode() {
    const code = `LAMBO-AP-${activeColor.slice(0, 3).toUpperCase()}-${activeWheel.slice(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    codeLabel.textContent = code;
  }

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const name = swatch.dataset.name;
      const hue = swatch.dataset.hue;
      const brightness = swatch.dataset.brightness;
      const grayscale = swatch.dataset.grayscale;
      const hex = swatch.dataset.color;

      updateVisuals(name, hue, brightness, grayscale, hex);
    });
  });

  finishBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      finishBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFinish = btn.textContent;
      finishVal.textContent = activeFinish;
      colorLabel.textContent = `${activeColor} (${activeFinish})`;
      const activeSwatch = document.querySelector('.color-swatch.active');
      if (activeSwatch) activeSwatch.click();
    });
  });

  wheelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      wheelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeWheel = btn.textContent;
      wheelVal.textContent = activeWheel;
      wheelLabel.textContent = `${activeWheel} | Calipers: ${activeCaliper}`;
      generateBuildCode();
    });
  });

  caliperSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      caliperSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      activeCaliper = swatch.dataset.caliper;
      caliperVal.textContent = activeCaliper;
      wheelLabel.textContent = `${activeWheel} | Calipers: ${activeCaliper}`;
      generateBuildCode();
    });
  });

  // Save Configuration button
  const saveBtn = document.getElementById('save-config-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const config = {
        model: currentSelectedModel,
        color: activeColor,
        finish: activeFinish,
        wheel: activeWheel,
        caliper: activeCaliper,
        code: codeLabel.textContent
      };
      localStorage.setItem('lambo_ad_personam', JSON.stringify(config));
      
      const originalText = saveBtn.innerHTML;
      saveBtn.innerHTML = `<ion-icon name="checkmark-done-outline"></ion-icon> Saved to Atelier! (${config.code})`;
      setTimeout(() => {
        saveBtn.innerHTML = originalText;
      }, 3000);
    });
  }

  // Inquire quotation button
  const inquireBtn = document.getElementById('inquire-config-btn');
  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      openTestDriveModal(CARS_DATABASE[currentSelectedModel].name);
    });
  }
}

// --- 7. MODELS LINEUP FILTERING & SPECS DRAWER ---
function initModelsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.model-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // View Specs Buttons on cards
  const specTriggers = document.querySelectorAll('.view-specs-trigger');
  specTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modelId = btn.dataset.modelId;
      openSpecsModal(modelId);
    });
  });

  // Test Drive triggers on cards
  const tdTriggers = document.querySelectorAll('.open-testdrive-trigger');
  tdTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modelName = btn.dataset.modelName;
      openTestDriveModal(modelName);
    });
  });
}

// --- 8. TECHNICAL BLUEPRINT & SPECS MODAL ---
function openSpecsModal(modelId) {
  const modal = document.getElementById('specs-modal');
  const data = CARS_DATABASE[modelId] || CARS_DATABASE.gallardo;
  if (!modal || !data) return;

  const titleEl = document.getElementById('specs-modal-title');
  const subtitleEl = document.getElementById('specs-modal-subtitle');
  const badgeEl = document.getElementById('specs-modal-badge');
  const tbody = document.getElementById('specs-table-body');

  titleEl.textContent = `${data.name} Blueprint`;
  subtitleEl.textContent = `Comprehensive engineering and dynamometer telemetry for the ${data.name}.`;
  badgeEl.textContent = data.badge;

  tbody.innerHTML = data.blueprint.map(row => `
    <tr>
      <td>${row.label}</td>
      <td>${row.val}</td>
    </tr>
  `).join('');

  modal.classList.add('active');

  const configBtn = document.getElementById('specs-modal-configure-btn');
  const tdBtn = document.getElementById('specs-modal-testdrive-btn');

  if (configBtn) {
    configBtn.onclick = () => {
      modal.classList.remove('active');
      document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
    };
  }
  if (tdBtn) {
    tdBtn.onclick = () => {
      modal.classList.remove('active');
      openTestDriveModal(data.name);
    };
  }
}

function initModals() {
  const specsModal = document.getElementById('specs-modal');
  const closeSpecs = document.getElementById('close-specs-modal');
  const tdModal = document.getElementById('test-drive-modal');
  const closeTd = document.getElementById('close-testdrive-modal');
  const headerTdBtn = document.getElementById('header-testdrive-btn');

  if (closeSpecs && specsModal) {
    closeSpecs.addEventListener('click', () => specsModal.classList.remove('active'));
    specsModal.addEventListener('click', (e) => {
      if (e.target === specsModal) specsModal.classList.remove('active');
    });
  }

  if (closeTd && tdModal) {
    closeTd.addEventListener('click', () => tdModal.classList.remove('active'));
    tdModal.addEventListener('click', (e) => {
      if (e.target === tdModal) tdModal.classList.remove('active');
    });
  }

  if (headerTdBtn) {
    headerTdBtn.addEventListener('click', () => {
      openTestDriveModal(CARS_DATABASE[currentSelectedModel].name);
    });
  }

  // Test Drive form submission
  const tdForm = document.getElementById('test-drive-form');
  if (tdForm) {
    tdForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const model = document.getElementById('td-model-select').value;
      const dealer = document.getElementById('td-dealer-select').value;
      const name = document.getElementById('td-name').value;
      const date = document.getElementById('td-date').value;

      const bookingRef = `LAMBO-VIP-${Math.floor(10000 + Math.random() * 90000)}`;

      tdForm.innerHTML = `
        <div style="text-align:center; padding: 2rem 1rem;">
          <ion-icon name="checkmark-circle" style="font-size:3.5rem; color:var(--first-color);"></ion-icon>
          <h3 style="margin:1rem 0 0.5rem; font-size:1.4rem;">VIP Appointment Confirmed</h3>
          <p style="color:var(--text-color); font-size:0.95rem; margin-bottom:1.5rem;">
            Thank you, <strong>${name}</strong>. Your private closed-circuit session for the <strong>${model}</strong> at <strong>${dealer}</strong> on <strong>${date}</strong> has been logged.
          </p>
          <div style="background:#141418; padding:1rem; border-radius:6px; font-family:var(--tech-font); color:var(--first-color);">
            CONFIRMATION CODE: ${bookingRef}
          </div>
          <button class="btn btn--primary btn--sm" style="margin-top:1.5rem;" onclick="document.getElementById('test-drive-modal').classList.remove('active')">
            Return to Showroom
          </button>
        </div>
      `;
    });
  }

  // Newsletter submission
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const submitBtn = document.getElementById('newsletter-submit-btn');
      if (input && submitBtn) {
        submitBtn.textContent = 'Welcome VIP';
        submitBtn.style.background = '#00E676';
        input.value = '';
        setTimeout(() => {
          submitBtn.textContent = 'Join';
          submitBtn.style.background = '';
        }, 3000);
      }
    });
  }
}

function openTestDriveModal(preselectedModel) {
  const modal = document.getElementById('test-drive-modal');
  const select = document.getElementById('td-model-select');
  if (!modal) return;

  if (select && preselectedModel) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(preselectedModel) || preselectedModel.includes(select.options[i].value)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.add('active');
}

// --- 9. DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroShowroom();
  initSoundExperience();
  initAlaSimulator();
  initConfigurator();
  initModelsFilter();
  initModals();
});
