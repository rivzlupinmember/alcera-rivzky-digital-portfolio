tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: {
                            800: '#0B192C',
                            900: '#1E3E62',
                        },
                        accent: {
                            blue: '#008DDA',
                            light: '#41C9E2'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }

// Color theme selector
        const themeSelect = document.getElementById('theme-select');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

        function applyTheme(mode) {
            const theme = mode === 'system'
                ? (systemTheme.matches ? 'dark' : 'light')
                : mode;

            document.documentElement.dataset.theme = theme;
            document.documentElement.dataset.themeMode = mode;
            themeSelect.value = mode;
            localStorage.setItem('portfolio-theme', mode);
        }

        const savedTheme = localStorage.getItem('portfolio-theme');
        applyTheme(['system', 'light', 'dark'].includes(savedTheme) ? savedTheme : 'system');

        themeSelect.addEventListener('change', () => {
            applyTheme(themeSelect.value);
        });

        systemTheme.addEventListener('change', () => {
            if (document.documentElement.dataset.themeMode === 'system') {
                applyTheme('system');
            }
        });

// Direct email inquiry form
        const inquiryForm = document.getElementById('inquiry-form');

        inquiryForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!inquiryForm.reportValidity()) {
                return;
            }

            const formData = new FormData(inquiryForm);
            const subject = formData.get('subject').trim();
            const body = [
                `Name: ${formData.get('name').trim()}`,
                `Email: ${formData.get('email').trim()}`,
                '',
                formData.get('message').trim()
            ].join('\n');
            const mailto = new URL('mailto:rivzkyalcera@gmail.com');
            mailto.searchParams.set('subject', subject);
            mailto.searchParams.set('body', body);

            window.location.href = mailto.href;
        });

// Mobile Navigation Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Modal Functionality
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        const projectDetails = {
            capstone: {
                title: "Web-Based Barangay Management System",
                content: `
                    <p><strong>Location:</strong> Barangay Sagpon, Daraga, Albay</p>
                    <p><strong>Overview:</strong> Developed an integrated web application featuring resident registration, OCR-based document digitization, incident blotter tracking, and offline data synchronization to streamline local government record administration.</p>
                    <p><strong>My Contributions:</strong> System documentation, user interface design, research, system parameter testing, and client demonstration on November 6, 2026.</p>
                    <p><strong>Key Skills:</strong> Documentation, UI Design, Research, System Testing, Client Communication</p>
                `
            },
            capstoneFeatures: {
                title: "Barangay Management System — Project Features",
                content: `
                    <ul class="list-disc space-y-2 pl-5">
                        <li><strong>Resident management:</strong> Resident registration, records, and archive access.</li>
                        <li><strong>Barangay services:</strong> Online certificate requests, including barangay and business clearances.</li>
                        <li><strong>Administrative dashboard:</strong> Overview of population, voter records, service requests, and barangay officials.</li>
                        <li><strong>Community updates:</strong> Announcements for residents and barangay users.</li>
                        <li><strong>Incident and complaint tracking:</strong> Blotter records and complaint management.</li>
                        <li><strong>Resident mobile dashboard:</strong> Responsive layout with quick actions, recent announcements, and request tracking.</li>
                        <li><strong>Additional capabilities:</strong> OCR-assisted document digitization and offline data synchronization.</li>
                    </ul>
                `
            },
            smartledger: {
                title: "SmartLedger — Personal & Micro-Business Finance System",
                content: `
                    <p><strong>Overview:</strong> AI-assisted personal & micro-business financial tracking platform designed to support automated budget management and receipt data extraction.</p>
                    <p><strong>My Contributions:</strong> Assisted in gathering system requirements, organizing project documentation, designing user interface layouts, and conducting usability testing.</p>
                    <p><strong>Key Skills:</strong> Requirements Gathering, UI Design Assistance, Technical Documentation, System Testing</p>
                `
            },
            smartledgerFeatures: {
                title: "SmartLedger — Project Features",
                content: `
                    <ul class="list-disc space-y-2 pl-5">
                        <li><strong>Financial overview:</strong> Dashboard cards for earnings, spending, and savings.</li>
                        <li><strong>Balance summary:</strong> Dedicated area for viewing a summarized financial balance.</li>
                        <li><strong>Expense summary:</strong> Visual expense chart with category totals.</li>
                        <li><strong>Finance navigation:</strong> Sections for invoices, payments, wallets, analytics, activity, and transactions.</li>
                        <li><strong>Card and AI assistance panels:</strong> Dashboard areas for card information and AI assistance.</li>
                        <li><strong>Account access screens:</strong> Login interface with password recovery and sign-up options.</li>
                    </ul>
                `
            },
            transease: {
                title: "TransEase — Smart Tricycle Fare & Passenger Management",
                content: `
                    <p><strong>Overview:</strong> Localized transport management platform designed to calculate fare matrix data and support administrative reporting.</p>
                    <p><strong>My Contributions:</strong> Assisted in organizing system specifications, designing user interface layouts, and testing core system features.</p>
                    <p><strong>Key Skills:</strong> Systems Analysis, Specification Organizing, UI Mockups, Functionality Testing</p>
                `
            },
            transeaseFeatures: {
                title: "TransEase — Project Features",
                content: `
                    <ul class="list-disc space-y-2 pl-5">
                        <li><strong>Administrative dashboard:</strong> At-a-glance summaries for drivers, passengers, trips, and revenue.</li>
                        <li><strong>Passenger management:</strong> Searchable passenger records with registration status and record actions.</li>
                        <li><strong>Driver management:</strong> Driver records and active-driver summaries.</li>
                        <li><strong>Trip management:</strong> Create trips and review records with routes, distance, fare, date, and completion status.</li>
                        <li><strong>Fare and report summaries:</strong> Fare information and daily trip and revenue reporting.</li>
                        <li><strong>Quick actions:</strong> Shortcuts for creating trips, adding drivers or passengers, and viewing reports.</li>
                    </ul>
                `
            }
        };

        function openModal(projectId) {
            if (projectDetails[projectId]) {
                modalTitle.innerText = projectDetails[projectId].title;
                modalBody.innerHTML = projectDetails[projectId].content;
                modalBackdrop.classList.remove('hidden');
            }
        }

        function closeModal() {
            modalBackdrop.classList.add('hidden');
        }

        // Close modal on backdrop click
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
