import SmallMenu from "./sidebar/SmallMenu";

export default function TopNavigation() {
   return (
    <div className="sticky top-0 z-20 w-11/12 mx-auto xl:w-full px-6 py-4 flex items-center">
        <SmallMenu />

        <div className="flex-1" />

        <div className="flex items-center gap-4">
        <a href="https://github.com/BeatrisRah" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline w-9 h-9">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0,0,256,256">
            <g fill="#fbfbfb" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z" /></g></g>
        </svg>
        </a>
        <a href="https://www.linkedin.com/in/beatris-rahimi/" target="_blank" className="w-9 h-9 text-pink-500 hover:underline">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0,0,256,256">
                <g fill="#fbfbfb" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM7.7793,6.31641c-0.857,0 -1.37109,0.51517 -1.37109,1.20117c0,0.686 0.51416,1.19922 1.28516,1.19922c0.857,0 1.37109,-0.51322 1.37109,-1.19922c0,-0.686 -0.51416,-1.20117 -1.28516,-1.20117zM6.47656,10v7h2.52344v-7zM11.08203,10v7h2.52344v-3.82617c0,-1.139 0.81264,-1.30273 1.05664,-1.30273c0.244,0 0.89649,0.24473 0.89649,1.30273v3.82617h2.44141v-3.82617c0,-2.197 -0.97627,-3.17383 -2.19727,-3.17383c-1.221,0 -1.87226,0.40656 -2.19726,0.97656v-0.97656z" /></g></g>
            </svg>
        </a>
        <a href="mailto:beatris.m.rahimi@gmail.com" className="w-9 h-9 text-pink-500 hover:underline">
            <svg className="w-8 h-full" height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{__html: " .st0{fill:#ffffff;} " }} /> <g> <polygon className="st0" points="512,295.199 445.92,226.559 512,169.6 " /> <polygon className="st0" points="66.16,226.559 0,295.279 0,169.6 " /> <path className="st0" d="M512,357.6v63.199c0,15.281-12.4,27.682-27.68,27.682H27.68c-15.281,0-27.68-12.4-27.68-27.682V357.6 l98.959-102.721L212,352.238c11.76,10.082,27.359,15.682,44,15.682c16.641,0,32.32-5.6,44.08-15.682l112.959-97.359L512,357.6z" /> <path className="st0" d="M512,91.119v27.68l-241.442,208c-7.76,6.72-21.359,6.72-29.119,0L0,118.799v-27.68 c0-15.279,12.398-27.6,27.68-27.6H484.32C499.6,63.519,512,75.84,512,91.119z" /> </g> </g></svg>
        </a>

        </div>
    </div>
   );
}