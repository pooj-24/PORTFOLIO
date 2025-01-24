import AboutImg from '../assets/poj.jpg';

export default function About() {
    const config = {
        line1: 'Hi, My name is Pooja M. I am a Software Developer. I build beautiful and efficient applications with a focus on high-quality development.',
        line2: 'I am proficient in Frontend skills like HTML, CSS, JavaScript, DSA, and Bootstrap.',
        line3: 'In Backend, I specialize in Python, MongoDB, and Data Science.',
        line4: 'I am passionate about learning new technologies and constantly improving my skills.',
        line5: 'I enjoy working on innovative projects and solving complex problems that challenge my abilities.',
        line6: 'Outside of work, I love reading books, exploring new places, and engaging in creative hobbies.',
    };

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2 flex justify-center'>
                <img
                    className='w-96 h-96 rounded-full object-cover'
                    src={AboutImg}
                    alt="Pooja M"
                />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                    <p className='pb-5'>{config.line4}</p>
                    <p className='pb-5'>{config.line5}</p>
                    <p className='pb-5'>{config.line6}</p>
                </div>
            </div>
        </section>
    );
}
