const { useState, useEffect } = React;

// Syllabus data structure for both exams
const EXAM_SYLLABUS = {
    NEET: {
        "Class 11": {
            Physics: [
                "Vectors",
                "Units and Measurements",
                "Motion in a Straight Line",
                "Motion in a Plane",
                "Laws of Motion",
                "Work, Energy and Power",
                "Rotational Motion",
                "Gravitation",
                "Mechanical Properties of Solids",
                "Mechanical Properties of Fluids",
                "Thermal Properties of Matter",
                "Thermodynamics",
                "Kinetic Theory",
                "Oscillations",
                "Waves"
            ],
            "Physical Chemistry": [
                "Some Basic Concepts of Chemistry",
                "Structure of atom",
                "States of Matter",
                "Thermodynamics",
                "Redox Reactions",
                "Chemical equilibrium",
                "Ionic equilibrium"
            ],
            "Organic Chemistry": [
                "Some Basic principles and Techniques (IUPAC Naming)",
                "Some Basic principles and Techniques (Isomerism)",
                "General organic chemistry (GOC)",
                "Purification, Characterisation, Qualitative & Quantitative",
                "Hydrocarbons"
            ],
            "Inorganic Chemistry": [
                "Classification of Elements and Periodicity in Properties",
                "Chemical Bonding and Molecular Structure",
                "The p-Block Elements"
            ],
            Botany: [
                "Cell-the unit of life",
                "Cell cycle cell division",
                "The living world",
                "Biological classification",
                "Plant kingdom",
                "Morphology of flowering plants",
                "Anatomy of flowering plants",
                "Photosynthesis in higher plants",
                "Respiration in plants",
                "Plant growth and development"
            ],
            Zoology: [
                "Structural Organisation in Animals",
                "Breathing & Exchange of Gases",
                "Body Fluids & Circulation",
                "Excretory Products & Their Elimination",
                "Locomotion & Movement",
                "Neural Control & Coordination",
                "Chemical Coordination & Integration",
                "Animal kingdom",
                "Biomolecules"
            ]
        },
        "Class 12": {
            Physics: [
                "Electric Charges and Fields",
                "Electrostatic Potential and Capacitance",
                "Current Electricity",
                "Moving Charges and Magnetism",
                "Magnetism and Matter",
                "Electromagnetic Induction",
                "Alternating Current",
                "Electromagnetic Waves",
                "Ray Optics and Optical Instruments",
                "Wave Optics",
                "Dual Nature of Radiation and Matter",
                "Atoms",
                "Nuclei",
                "Semiconductor Electronics",
                "Communication Systems"
            ],
            "Physical Chemistry": [
                "Solutions",
                "Electrochemistry",
                "Chemical Kinetics",
                "Surface Chemistry",
                "Solid State"
            ],
            "Organic Chemistry": [
                "Haloalkanes and Haloarenes",
                "Alcohols, Phenols and Ethers",
                "Aldehydes, Ketones and Carboxylic Acids",
                "Amines",
                "Biomolecules",
                "Polymers",
                "Chemistry in Everyday Life"
            ],
            "Inorganic Chemistry": [
                "General Principles and Processes of Isolation of Elements",
                "The p-Block Elements",
                "The d-Block and f-Block Elements",
                "Coordination Compounds"
            ],
            Botany: [
                "Reproduction in Organisms",
                "Sexual Reproduction in Flowering Plants",
                "Human Reproduction",
                "Reproductive Health",
                "Principles of Inheritance and Variation",
                "Molecular Basis of Inheritance",
                "Evolution",
                "Human Health and Disease",
                "Strategies for Enhancement in Food Production",
                "Microbes in Human Welfare",
                "Biotechnology Principles and Processes",
                "Biotechnology and its Applications",
                "Organisms and Populations",
                "Ecosystem",
                "Biodiversity and Conservation",
                "Environmental Issues"
            ],
            Zoology: [
                "Reproduction in Organisms",
                "Sexual Reproduction in Flowering Plants",
                "Human Reproduction",
                "Reproductive Health",
                "Principles of Inheritance and Variation",
                "Molecular Basis of Inheritance",
                "Evolution",
                "Human Health and Disease",
                "Strategies for Enhancement in Food Production",
                "Microbes in Human Welfare",
                "Biotechnology Principles and Processes",
                "Biotechnology and its Applications",
                "Organisms and Populations",
                "Ecosystem",
                "Biodiversity and Conservation",
                "Environmental Issues"
            ]
        }
    },
    JEE: {
        "Class 11": {
            Physics: [
                "Vectors",
                "Units and Measurements",
                "Motion in a Straight Line",
                "Motion in a Plane",
                "Laws of Motion",
                "Work, Energy and Power",
                "Rotational Motion",
                "Gravitation",
                "Mechanical Properties of Solids",
                "Mechanical Properties of Fluids",
                "Thermal Properties of Matter",
                "Thermodynamics",
                "Kinetic Theory",
                "Oscillations",
                "Waves"
            ],
            "Physical Chemistry": [
                "Some Basic Concepts of Chemistry",
                "Structure of atom",
                "States of Matter",
                "Thermodynamics",
                "Redox Reactions",
                "Chemical equilibrium",
                "Ionic equilibrium"
            ],
            "Organic Chemistry": [
                "Some Basic principles and Techniques (IUPAC Naming)",
                "Some Basic principles and Techniques (Isomerism)",
                "General organic chemistry (GOC)",
                "Purification, Characterisation, Qualitative & Quantitative",
                "Hydrocarbons"
            ],
            "Inorganic Chemistry": [
                "Classification of Elements and Periodicity in Properties",
                "Chemical Bonding and Molecular Structure",
                "The s-Block Elements",
                "The p-Block Elements"
            ],
            Mathematics: [
                "Sets, Relations and Functions",
                "Complex Numbers and Quadratic Equations",
                "Matrices and Determinants",
                "Permutations and Combinations",
                "Binomial Theorem and its Simple Applications",
                "Sequence and Series",
                "Limit, Continuity and Differentiability",
                "Integral Calculus",
                "Differential Equations",
                "Coordinate Geometry",
                "Three Dimensional Geometry",
                "Vector Algebra",
                "Statistics and Probability",
                "Trigonometry",
                "Mathematical Reasoning"
            ]
        },
        "Class 12": {
            Physics: [
                "Electric Charges and Fields",
                "Electrostatic Potential and Capacitance",
                "Current Electricity",
                "Moving Charges and Magnetism",
                "Magnetism and Matter",
                "Electromagnetic Induction",
                "Alternating Current",
                "Electromagnetic Waves",
                "Ray Optics and Optical Instruments",
                "Wave Optics",
                "Dual Nature of Radiation and Matter",
                "Atoms",
                "Nuclei",
                "Semiconductor Electronics",
                "Communication Systems"
            ],
            "Physical Chemistry": [
                "Solutions",
                "Electrochemistry",
                "Chemical Kinetics",
                "Surface Chemistry",
                "Solid State"
            ],
            "Organic Chemistry": [
                "Haloalkanes and Haloarenes",
                "Alcohols, Phenols and Ethers",
                "Aldehydes, Ketones and Carboxylic Acids",
                "Amines",
                "Biomolecules",
                "Polymers",
                "Chemistry in Everyday Life"
            ],
            "Inorganic Chemistry": [
                "General Principles and Processes of Isolation of Elements",
                "The p-Block Elements",
                "The d-Block and f-Block Elements",
                "Coordination Compounds"
            ],
            Mathematics: [
                "Relations and Functions",
                "Inverse Trigonometric Functions",
                "Matrices",
                "Determinants",
                "Continuity and Differentiability",
                "Applications of Derivatives",
                "Integrals",
                "Applications of Integrals",
                "Differential Equations",
                "Vector Algebra",
                "Three Dimensional Geometry",
                "Linear Programming",
                "Probability"
            ]
        }
    }
};

const App = () => {
    const [currentExam, setCurrentExam] = useState(() => {
        const saved = localStorage.getItem('currentExam');
        return saved || null;
    });
    const [view, setView] = useState(() => {
        return currentExam ? 'home' : 'exam-select';
    });
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('syllabusData');
        return saved ? JSON.parse(saved) : { NEET: {}, JEE: {} };
    });
    const [editMode, setEditMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({});
    const [toast, setToast] = useState({ show: false, message: '' });

    useEffect(() => {
        localStorage.setItem('syllabusData', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        localStorage.setItem('currentExam', currentExam || '');
    }, [currentExam]);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const changeExam = () => {
        setCurrentExam(null);
        setView('exam-select');
        setSelectedClass(null);
        setSelectedSubject(null);
        setSelectedChapter(null);
    };

    const getChapterData = (className, subject, chapter) => {
        if (!data[currentExam]) return {};
        if (!data[currentExam][className]) return {};
        if (!data[currentExam][className][subject]) return {};
        return data[currentExam][className][subject][chapter] || {};
    };

    const updateChapterData = (className, subject, chapter, newData) => {
        setData(prev => ({
            ...prev,
            [currentExam]: {
                ...prev[currentExam],
                [className]: {
                    ...prev[currentExam]?.[className],
                    [subject]: {
                        ...prev[currentExam]?.[className]?.[subject],
                        [chapter]: {
                            ...prev[currentExam]?.[className]?.[subject]?.[chapter],
                            ...newData
                        }
                    }
                }
            }
        }));
    };

    const resetAllProgress = () => {
        setModalConfig({
            title: 'Reset All Progress',
            message: 'Are you sure you want to reset all progress? This action cannot be undone.',
            onConfirm: () => {
                setData(prev => ({ ...prev, [currentExam]: {} }));
                setShowModal(false);
                showToast('All progress has been reset');
            }
        });
        setShowModal(true);
    };

    const deleteChapter = (className, subject, chapter) => {
        setData(prev => {
            const newData = { ...prev };
            if (newData[currentExam]?.[className]?.[subject]) {
                const subjectData = { ...newData[currentExam][className][subject] };
                delete subjectData[chapter];
                newData[currentExam][className][subject] = subjectData;
            }
            return newData;
        });
        showToast(`Deleted: ${chapter}`);
    };

    const addCustomChapter = (className, subject, chapterName) => {
        if (!EXAM_SYLLABUS[currentExam][className][subject].includes(chapterName)) {
            EXAM_SYLLABUS[currentExam][className][subject].push(chapterName);
            showToast(`Added: ${chapterName}`);
        }
    };

    const getProgress = (className, subject, chapter) => {
        const chapterData = getChapterData(className, subject, chapter);
        
        // Weighted components (total = 100%)
        let totalProgress = 0;
        
        // Lecture - 20%
        if (chapterData.lecture) totalProgress += 20;
        
        // Notes - 15%
        if (chapterData.notes) totalProgress += 15;
        
        // DPP - 10%
        if (chapterData.dpp) totalProgress += 10;
        
        // EXAM PYQ - 15%
        if (chapterData.pyq) totalProgress += 15;
        
        // Short Notes - 10%
        if (chapterData.shortNotes) totalProgress += 10;
        
        // NCERT Reading - 5%
        if (chapterData.ncert) totalProgress += 5;
        
        // Test - 10%
        if (chapterData.test) totalProgress += 10;
        
        // Revisions (1-5) - 1% each = 5%
        if (chapterData.revision1) totalProgress += 1;
        if (chapterData.revision2) totalProgress += 1;
        if (chapterData.revision3) totalProgress += 1;
        if (chapterData.revision4) totalProgress += 1;
        if (chapterData.revision5) totalProgress += 1;
        
        // Satisfaction Rating - 1% per star (max 10%)
        const satisfaction = chapterData.satisfaction || 0;
        totalProgress += satisfaction; // Each star = 1%
        
        return Math.round(totalProgress);
    };

    const getSubjectProgress = (className, subject) => {
        const chapters = EXAM_SYLLABUS[currentExam][className][subject];
        const total = chapters.reduce((sum, chapter) => sum + getProgress(className, subject, chapter), 0);
        return Math.round(total / chapters.length);
    };

    const getClassProgress = (className) => {
        const subjects = Object.keys(EXAM_SYLLABUS[currentExam][className]);
        const total = subjects.reduce((sum, subject) => sum + getSubjectProgress(className, subject), 0);
        return Math.round(total / subjects.length);
    };

    const getAnalytics = () => {
        const classes = Object.keys(EXAM_SYLLABUS[currentExam]);
        let totalChapters = 0;
        let completedChapters = 0;
        let totalProgress = 0;
        let totalSatisfaction = 0;
        let satisfactionCount = 0;
        let strongCount = 0;
        let moderateCount = 0;
        let weakCount = 0;
        let subjectProgress = {};

        classes.forEach(className => {
            Object.keys(EXAM_SYLLABUS[currentExam][className]).forEach(subject => {
                const chapters = EXAM_SYLLABUS[currentExam][className][subject];
                totalChapters += chapters.length;

                const subjectKey = `${className}-${subject}`;
                if (!subjectProgress[subjectKey]) {
                    subjectProgress[subjectKey] = { total: 0, count: 0, name: subject };
                }

                chapters.forEach(chapter => {
                    const progress = getProgress(className, subject, chapter);
                    totalProgress += progress;
                    subjectProgress[subjectKey].total += progress;
                    subjectProgress[subjectKey].count += 1;

                    if (progress === 100) completedChapters++;
                    const chapterData = getChapterData(className, subject, chapter);
                    if (chapterData.satisfaction) {
                        totalSatisfaction += chapterData.satisfaction;
                        satisfactionCount++;
                        if (chapterData.satisfaction >= 8) strongCount++;
                        else if (chapterData.satisfaction >= 5) moderateCount++;
                        else weakCount++;
                    }
                });
            });
        });

        const neglected = Object.entries(subjectProgress)
            .map(([key, val]) => ({ name: val.name, progress: Math.round(val.total / val.count) }))
            .sort((a, b) => a.progress - b.progress)[0] || { name: 'None', progress: 0 };

        return {
            overallProgress: Math.round(totalProgress / totalChapters),
            totalChapters,
            completedChapters,
            avgSatisfaction: satisfactionCount > 0 ? (totalSatisfaction / satisfactionCount).toFixed(1) : 0,
            strongCount,
            moderateCount,
            weakCount,
            neglectedSubject: neglected.name,
            neglectedProgress: neglected.progress
        };
    };

    const getSubjectClass = (subject) => {
        const subjectMap = {
            'Physics': 'subject-physics',
            'Botany': 'subject-botany',
            'Zoology': 'subject-zoology',
            'Mathematics': 'subject-mathematics',
            'Physical Chemistry': 'subject-physical-chemistry',
            'Organic Chemistry': 'subject-organic-chemistry',
            'Inorganic Chemistry': 'subject-inorganic-chemistry'
        };
        return subjectMap[subject] || '';
    };

    // Import/Export functions
    const exportData = () => {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${currentExam}_syllabus_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        showToast('Data exported successfully!');
    };

    const importData = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                setData(importedData);
                showToast('Data imported successfully!');
            } catch (error) {
                showToast('Error importing data. Please check the file format.');
            }
        };
        reader.readAsText(file);
    };

    const ExamSelectView = () => {
        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'header' },
                React.createElement('h1', { className: 'logo' }, 'Exam Tracker'),
                React.createElement('p', { className: 'tagline' }, 'Choose Your Path to Success')
            ),
            React.createElement('div', { className: 'grid grid-2' },
                React.createElement('div', {
                    className: 'card exam-card',
                    onClick: () => {
                        setCurrentExam('NEET');
                        setView('home');
                    }
                },
                    React.createElement('div', { className: 'exam-icon' }, '🏥'),
                    React.createElement('h2', { className: 'card-title', style: { fontSize: '2rem', marginTop: '1rem' } }, 'NEET'),
                    React.createElement('p', { className: 'card-subtitle' }, 'National Eligibility cum Entrance Test'),
                    React.createElement('div', { className: 'exam-subjects' },
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Physics'),
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Chemistry'),
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Biology')
                    )
                ),
                React.createElement('div', {
                    className: 'card exam-card',
                    onClick: () => {
                        setCurrentExam('JEE');
                        setView('home');
                    }
                },
                    React.createElement('div', { className: 'exam-icon' }, '⚙️'),
                    React.createElement('h2', { className: 'card-title', style: { fontSize: '2rem', marginTop: '1rem' } }, 'JEE'),
                    React.createElement('p', { className: 'card-subtitle' }, 'Joint Entrance Examination'),
                    React.createElement('div', { className: 'exam-subjects' },
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Physics'),
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Chemistry'),
                        React.createElement('span', { className: 'exam-subject-tag' }, 'Mathematics')
                    )
                )
            ),
            React.createElement('div', { className: 'social-links', style: { marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' } },
                React.createElement('a', {
                    href: 'https://www.instagram.com/naitik.156',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'social-link',
                    style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                },
                    React.createElement('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        style: { color: '#E4405F' }
                    },
                        React.createElement('path', {
                            d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                        })
                    ),
                    React.createElement('span', null, 'naitik_156_')
                ),
                React.createElement('a', {
                    href: 'mailto:rajnaitik620.com',
                    className: 'social-link',
                    style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                },
                    React.createElement('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        style: { color: '#EA4335' }
                    },
                        React.createElement('path', {
                            d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
                        })
                    ),
                    React.createElement('span', null, 'naitikk156@gmail.com')
                )
            )
        );
    };

    const HomePage = () => {
        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, 'Home')
            ),
            React.createElement('div', { className: 'header' },
                React.createElement('h1', { className: 'logo' }, `${currentExam} Syllabus Tracker`),
                React.createElement('p', { className: 'tagline' }, 'Track Your Progress • Stay Focused • Achieve Success')
            ),
            React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem' } },
                React.createElement('button', {
                    className: 'btn btn-secondary',
                    onClick: changeExam,
                    style: { marginRight: '1rem' }
                }, 'Change Exam'),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: exportData,
                    style: { marginRight: '1rem' }
                }, '📥 Export Data'),
                React.createElement('label', {
                    className: 'btn btn-primary',
                    style: { cursor: 'pointer' }
                },
                    '📤 Import Data',
                    React.createElement('input', {
                        type: 'file',
                        accept: '.json',
                        onChange: importData,
                        style: { display: 'none' }
                    })
                )
            ),
            React.createElement('div', { className: 'grid grid-2' },
                React.createElement('div', {
                    className: 'card class-card',
                    onClick: () => {
                        setSelectedClass('Class 11');
                        setView('subjects');
                    }
                },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
                        React.createElement('span', { style: { fontSize: '3rem' } }, '📚'),
                        React.createElement('h2', { className: 'card-title', style: { margin: 0 } }, 'Class 11')
                    ),
                    React.createElement('p', { className: 'card-subtitle' }, 'Foundation Building Phase'),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Overall Progress'),
                            React.createElement('span', null, `${getClassProgress('Class 11')}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getClassProgress('Class 11')}%` } })
                        )
                    )
                ),
                React.createElement('div', {
                    className: 'card class-card',
                    onClick: () => {
                        setSelectedClass('Class 12');
                        setView('subjects');
                    }
                },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '1rem' } },
                        React.createElement('span', { style: { fontSize: '3rem' } }, '🎓'),
                        React.createElement('h2', { className: 'card-title', style: { margin: 0 } }, 'Class 12')
                    ),
                    React.createElement('p', { className: 'card-subtitle' }, 'Advanced Concepts Phase'),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Overall Progress'),
                            React.createElement('span', null, `${getClassProgress('Class 12')}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getClassProgress('Class 12')}%` } })
                        )
                    )
                )
            ),
            React.createElement('div', { style: { textAlign: 'center', marginTop: '3rem' } },
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: () => setView('dashboard'),
                    style: { fontSize: '1.1rem', padding: '1rem 2rem' }
                }, '📊 View Analytics Dashboard')
            ),
            React.createElement('div', { className: 'social-links', style: { marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' } },
                React.createElement('a', {
                    href: 'https://www.instagram.com/naitik.156',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'social-link',
                    style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                },
                    React.createElement('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        style: { color: '#E4405F' }
                    },
                        React.createElement('path', {
                            d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                        })
                    ),
                    React.createElement('span', null, '@naitik.156')
                ),
                React.createElement('a', {
                    href: 'mailto:naitikk156@gmail.com',
                    className: 'social-link',
                    style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                },
                    React.createElement('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        style: { color: '#EA4335' }
                    },
                        React.createElement('path', {
                            d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
                        })
                    ),
                    React.createElement('span', null, 'naitikk156@gmail.com')
                )
            )
        );
    };

    const SubjectsView = () => {
        const subjects = Object.keys(EXAM_SYLLABUS[currentExam][selectedClass]);

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedClass)
            ),
            React.createElement('div', { className: 'header' },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2.5rem' } }, selectedClass)
            ),
            React.createElement('div', { className: 'grid grid-3' },
                subjects.map(subject => React.createElement('div', {
                    key: subject,
                    className: `card ${getSubjectClass(subject)}`,
                    onClick: () => {
                        setSelectedSubject(subject);
                        setView('chapters');
                    }
                },
                    React.createElement('h3', { className: 'card-title' }, subject),
                    React.createElement('p', { className: 'card-subtitle' }, `${EXAM_SYLLABUS[currentExam][selectedClass][subject].length} Chapters`),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Progress'),
                            React.createElement('span', null, `${getSubjectProgress(selectedClass, subject)}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getSubjectProgress(selectedClass, subject)}%` } })
                        )
                    )
                ))
            )
        );
    };

    const ChaptersView = () => {
        const chapters = EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject];
        const [newChapterName, setNewChapterName] = useState('');
        const [editingChapter, setEditingChapter] = useState(null);
        const [editedName, setEditedName] = useState('');

        const handleAddChapter = () => {
            if (newChapterName.trim()) {
                addCustomChapter(selectedClass, selectedSubject, newChapterName.trim());
                setNewChapterName('');
            }
        };

        const handleRenameChapter = (oldName) => {
            if (editedName.trim() && editedName !== oldName) {
                const index = EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject].indexOf(oldName);
                if (index > -1) {
                    EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject][index] = editedName.trim();
                    
                    // Migrate data from old chapter name to new
                    const oldData = getChapterData(selectedClass, selectedSubject, oldName);
                    if (Object.keys(oldData).length > 0) {
                        updateChapterData(selectedClass, selectedSubject, editedName.trim(), oldData);
                        deleteChapter(selectedClass, selectedSubject, oldName);
                    }
                    
                    showToast(`Renamed: ${oldName} → ${editedName.trim()}`);
                }
            }
            setEditingChapter(null);
            setEditedName('');
        };

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('subjects') }, selectedClass),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedSubject)
            ),
            React.createElement('div', { className: 'header' },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2rem' } }, selectedSubject),
                React.createElement('button', {
                    className: 'edit-toggle-btn',
                    onClick: () => setEditMode(!editMode)
                }, editMode ? '✓ Done' : '✏️ Edit')
            ),
            React.createElement('div', { className: 'grid grid-3' },
                chapters.map(chapter => {
                    const progress = getProgress(selectedClass, selectedSubject, chapter);
                    const chapterData = getChapterData(selectedClass, selectedSubject, chapter);
                    const satisfaction = chapterData.satisfaction || 0;
                    
                    return React.createElement('div', {
                        key: chapter,
                        className: `card chapter-card ${getSubjectClass(selectedSubject)}`,
                        onClick: () => {
                            if (!editMode) {
                                setSelectedChapter(chapter);
                                setView('detail');
                            }
                        }
                    },
                        editMode
                            ? React.createElement('div', { className: 'chapter-header' },
                                editingChapter === chapter
                                    ? React.createElement('input', {
                                        type: 'text',
                                        className: 'chapter-edit-input',
                                        value: editedName,
                                        onChange: (e) => setEditedName(e.target.value),
                                        onBlur: () => handleRenameChapter(chapter),
                                        onKeyPress: (e) => e.key === 'Enter' && handleRenameChapter(chapter),
                                        autoFocus: true,
                                        onClick: (e) => e.stopPropagation()
                                    })
                                    : React.createElement('h3', {
                                        className: 'card-title chapter-title',
                                        onClick: (e) => {
                                            e.stopPropagation();
                                            setEditingChapter(chapter);
                                            setEditedName(chapter);
                                        }
                                    }, chapter),
                                React.createElement('button', {
                                    className: 'delete-chapter-btn',
                                    onClick: (e) => {
                                        e.stopPropagation();
                                        setModalConfig({
                                            title: 'Delete Chapter',
                                            message: `Are you sure you want to delete "${chapter}"?`,
                                            onConfirm: () => {
                                                deleteChapter(selectedClass, selectedSubject, chapter);
                                                setShowModal(false);
                                            }
                                        });
                                        setShowModal(true);
                                    }
                                }, '×')
                            )
                            : React.createElement('h3', { className: 'card-title' }, chapter),
                        React.createElement('div', { className: 'satisfaction-display' },
                            React.createElement('span', { style: { fontSize: '1.5rem' } },
                                satisfaction > 0 ? `${'★'.repeat(satisfaction)}${'☆'.repeat(10 - satisfaction)}` : '☆☆☆☆☆☆☆☆☆☆'
                            )
                        ),
                        React.createElement('div', { className: 'progress-container', style: { marginTop: '1rem' } },
                            React.createElement('div', { className: 'progress-label' },
                                React.createElement('span', null, 'Progress'),
                                React.createElement('span', null, `${progress}%`)
                            ),
                            React.createElement('div', { className: 'progress-bar-bg' },
                                React.createElement('div', { className: 'progress-bar-fill', style: { width: `${progress}%` } })
                            )
                        )
                    );
                }),
                editMode && React.createElement('div', {
                    className: 'card add-chapter-card',
                    onClick: (e) => e.stopPropagation()
                },
                    newChapterName
                        ? React.createElement('div', { className: 'add-chapter-form' },
                            React.createElement('input', {
                                type: 'text',
                                placeholder: 'Chapter name...',
                                value: newChapterName,
                                onChange: (e) => setNewChapterName(e.target.value),
                                onKeyPress: (e) => e.key === 'Enter' && handleAddChapter(),
                                autoFocus: true,
                                style: {
                                    width: '100%',
                                    padding: '0.75rem',
                                    fontSize: '1rem',
                                    border: '2px solid var(--primary)',
                                    borderRadius: '8px',
                                    marginBottom: '1rem'
                                }
                            }),
                            React.createElement('div', { style: { display: 'flex', gap: '0.5rem' } },
                                React.createElement('button', {
                                    className: 'btn btn-primary',
                                    onClick: handleAddChapter,
                                    style: { flex: 1 }
                                }, 'Add'),
                                React.createElement('button', {
                                    className: 'btn btn-secondary',
                                    onClick: () => setNewChapterName(''),
                                    style: { flex: 1 }
                                }, 'Cancel')
                            )
                        )
                        : React.createElement(React.Fragment, null,
                            React.createElement('div', {
                                className: 'add-chapter-icon',
                                onClick: () => setNewChapterName(' ')
                            }, '+'),
                            React.createElement('p', {
                                className: 'card-subtitle',
                                onClick: () => setNewChapterName(' ')
                            }, 'Add Custom Chapter')
                        )
                )
            )
        );
    };

    const DetailView = () => {
        const chapterData = getChapterData(selectedClass, selectedSubject, selectedChapter);
        const progress = getProgress(selectedClass, selectedSubject, selectedChapter);

        const resetChapter = () => {
            setModalConfig({
                title: 'Reset Chapter',
                message: `Are you sure you want to reset all progress for "${selectedChapter}"?`,
                onConfirm: () => {
                    updateChapterData(selectedClass, selectedSubject, selectedChapter, {
                        lecture: false,
                        notes: false,
                        dpp: false,
                        pyq: false,
                        shortNotes: false,
                        ncert: false,
                        test: false,
                        revision1: false,
                        revision2: false,
                        revision3: false,
                        revision4: false,
                        revision5: false,
                        satisfaction: 0
                    });
                    setShowModal(false);
                    showToast('Chapter progress reset');
                }
            });
            setShowModal(true);
        };

        const tasks = [
            { label: 'Lecture (20%)', key: 'lecture' },
            { label: 'Notes (15%)', key: 'notes' },
            { label: 'DPP (10%)', key: 'dpp' },
            { label: 'NEET PYQ (15%)', key: 'pyq' },
            { label: 'Short Notes (10%)', key: 'shortNotes' },
            { label: 'NCERT Reading (5%)', key: 'ncert' },
            { label: 'Test (10%)', key: 'test' },
            { label: 'Revision 1 (1%)', key: 'revision1' },
            { label: 'Revision 2 (1%)', key: 'revision2' },
            { label: 'Revision 3 (1%)', key: 'revision3' },
            { label: 'Revision 4 (1%)', key: 'revision4' },
            { label: 'Revision 5 (1%)', key: 'revision5' },
        ];

        return React.createElement('div', { className: 'container detail-page' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('subjects') }, selectedClass),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('chapters') }, selectedSubject),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedChapter)
            ),
            React.createElement('div', { className: `detail-card ${getSubjectClass(selectedSubject)}` },
                React.createElement('div', { className: 'detail-header' },
                    React.createElement('h2', { className: 'detail-title' }, selectedChapter),
                    React.createElement('div', { className: 'progress-container' },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', { style: { fontSize: '1.1rem', fontWeight: '700' } }, 'Overall Progress'),
                            React.createElement('span', { style: { fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' } }, `${progress}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg', style: { height: '14px' } },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${progress}%` } })
                        )
                    )
                ),
                React.createElement('div', { 
                    className: 'weight-info', 
                    style: { 
                        background: 'rgba(15, 118, 110, 0.05)', 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-light)'
                    } 
                },
                    React.createElement('strong', null, 'Progress Calculation: '),
                    'Each task has a weight that contributes to your overall progress (Total = 100%)'
                ),
                React.createElement('table', { className: 'task-table' },
                    React.createElement('tbody', null,
                        tasks.map(task => React.createElement('tr', { key: task.key },
                            React.createElement('td', { className: 'task-label' }, task.label),
                            React.createElement('td', { className: 'checkbox-wrapper' },
                                React.createElement('input', {
                                    type: 'checkbox',
                                    className: 'custom-checkbox',
                                    checked: !!chapterData[task.key],
                                    onChange: (e) => {
                                        updateChapterData(selectedClass, selectedSubject, selectedChapter, { [task.key]: e.target.checked });
                                    }
                                })
                            )
                        )),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'task-label' }, 'Satisfaction Level (1% per star, max 10%)'),
                            React.createElement('td', null,
                                React.createElement('div', { className: 'star-rating' },
                                    [...Array(10)].map((_, i) => React.createElement('span', {
                                        key: i,
                                        className: `star ${(chapterData.satisfaction || 0) > i ? 'filled' : ''}`,
                                        onClick: () => {
                                            updateChapterData(selectedClass, selectedSubject, selectedChapter, { satisfaction: i + 1 });
                                        }
                                    }, '★'))
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'action-buttons' },
                    React.createElement('button', { className: 'btn btn-danger', onClick: resetChapter }, 'Reset Chapter')
                )
            )
        );
    };

    const DashboardView = () => {
        const analytics = getAnalytics();

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, 'Dashboard')
            ),
            React.createElement('div', { className: 'header', style: { marginBottom: '2rem' } },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2rem' } }, `${currentExam} Performance Analytics`),
                React.createElement('div', { style: { marginTop: '1rem' } },
                    React.createElement('button', {
                        className: 'btn btn-primary',
                        onClick: exportData,
                        style: { marginRight: '1rem' }
                    }, '📥 Export Data'),
                    React.createElement('label', {
                        className: 'btn btn-primary',
                        style: { cursor: 'pointer' }
                    },
                        '📤 Import Data',
                        React.createElement('input', {
                            type: 'file',
                            accept: '.json',
                            onChange: importData,
                            style: { display: 'none' }
                        })
                    )
                )
            ),
            React.createElement('div', { className: 'dashboard-stats' },
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.overallProgress}%`),
                    React.createElement('div', { className: 'stat-label' }, 'Overall Completion')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.completedChapters}/${analytics.totalChapters}`),
                    React.createElement('div', { className: 'stat-label' }, 'Chapters Completed')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--success)' } }, analytics.strongCount),
                    React.createElement('div', { className: 'stat-label' }, 'Strong Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--warning)' } }, analytics.moderateCount),
                    React.createElement('div', { className: 'stat-label' }, 'Moderate Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--danger)' } }, analytics.weakCount),
                    React.createElement('div', { className: 'stat-label' }, 'Weak Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.avgSatisfaction}/10`),
                    React.createElement('div', { className: 'stat-label' }, 'Avg Satisfaction')
                )
            ),
            React.createElement('div', { className: 'card', style: { marginTop: '2rem' } },
                React.createElement('h3', { className: 'card-title' }, 'Most Neglected Subject'),
                React.createElement('p', { className: 'card-subtitle' }, analytics.neglectedSubject),
                React.createElement('div', { className: 'progress-container' },
                    React.createElement('div', { className: 'progress-label' },
                        React.createElement('span', null, 'Progress'),
                        React.createElement('span', null, `${analytics.neglectedProgress}%`)
                    ),
                    React.createElement('div', { className: 'progress-bar-bg' },
                        React.createElement('div', { className: 'progress-bar-fill', style: { width: `${analytics.neglectedProgress}%` } })
                    )
                )
            )
        );
    };

    return React.createElement(React.Fragment, null,
        view === 'exam-select' && React.createElement(ExamSelectView),
        view === 'home' && React.createElement(HomePage),
        view === 'subjects' && React.createElement(SubjectsView),
        view === 'chapters' && React.createElement(ChaptersView),
        view === 'detail' && React.createElement(DetailView),
        view === 'dashboard' && React.createElement(DashboardView),
        showModal && React.createElement('div', { className: 'modal', onClick: () => setShowModal(false) },
            React.createElement('div', { className: 'modal-content', onClick: (e) => e.stopPropagation() },
                React.createElement('h3', { className: 'modal-title' }, modalConfig.title),
                React.createElement('p', null, modalConfig.message),
                React.createElement('div', { className: 'modal-buttons' },
                    React.createElement('button', { className: 'btn btn-secondary', onClick: () => setShowModal(false) }, 'Cancel'),
                    React.createElement('button', { className: 'btn btn-danger', onClick: modalConfig.onConfirm }, 'Confirm')
                )
            )
        ),
        toast.show && React.createElement('div', { className: 'toast' }, toast.message)
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
