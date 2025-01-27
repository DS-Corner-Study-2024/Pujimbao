//8번
if (process.env.NODE_ENV === 'production') {  --- (1)배포 환경인지 개발 환경인지를 판단할 수 있는 환경 변수
  app.enable('trust proxy');
  app.use(morgan('combined')); --- (2)배포 환경일 때 morgan을 combined모드로 사용하는 코드
} else {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
...

//9번
const sanitizeHtml=require('sanitize-html');

const html="<script>location.href='https://gilbut.co.kr'</script>";
console.log(sanitizeHtml(html));  ---(1)