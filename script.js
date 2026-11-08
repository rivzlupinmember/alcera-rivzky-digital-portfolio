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
            smartledger: {
                title: "SmartLedger — Personal & Micro-Business Finance System",
                content: `
                    <p><strong>Overview:</strong> AI-assisted personal & micro-business financial tracking platform designed to support automated budget management and receipt data extraction.</p>
                    <p><strong>My Contributions:</strong> Assisted in gathering system requirements, organizing project documentation, designing user interface layouts, and conducting usability testing.</p>
                    <p><strong>Key Skills:</strong> Requirements Gathering, UI Design Assistance, Technical Documentation, System Testing</p>
                `
            },
            transease: {
                title: "TransEase — Smart Tricycle Fare & Passenger Management",
                content: `
                    <p><strong>Overview:</strong> Localized transport management platform designed to calculate fare matrix data and support administrative reporting.</p>
                    <p><strong>My Contributions:</strong> Assisted in organizing system specifications, designing user interface layouts, and testing core system features.</p>
                    <p><strong>Key Skills:</strong> Systems Analysis, Specification Organizing, UI Mockups, Functionality Testing</p>
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
