
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width:"100%", height: "95%" }} cols={1} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="eager"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
 {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Nada_como_um_dia_ap%C3%B3s_o_outro_dia.jpg/220px-Nada_como_um_dia_ap%C3%B3s_o_outro_dia.jpg', 
    title: 'Nada como um dia após o outro Dia',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/36/Sobrevivendo_no_Inferno.jpg/220px-Sobrevivendo_no_Inferno.jpg',
    title: 'Sobrevivend no Inferno',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Cores_%26_Valores.jpg/220px-Cores_%26_Valores.jpg',
    title: 'Cores e Valores',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ea/Raio_X_Brasil.jpg/220px-Raio_X_Brasil.jpg',
    title: 'Raio X Brasil',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Holocausto_Urbano.jpg/220px-Holocausto_Urbano.jpg',
    title: 'Holocausto Urbano',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Escolha_seu_Caminho.jpg/220px-Escolha_seu_Caminho.jpg',
    title: 'Escolha seu caminho',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/02/Racionais_MC%27s_CD.jpg/220px-Racionais_MC%27s_CD.jpg',
    title: 'Racionais MCs',
  },
  {
    img: 'https://s2-g1.glbimg.com/dir6mWB64pjfc6FXW_dhfQqzQsI=/0x0:2048x2048/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/J/n/PWiXj5SsWS6BanTBZetA/linikercajucapa.jpg',
    title: 'Caju',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d0000b273dcbb1c44c0e367bfdc32fbe4',
    title: 'Goela abaixo',
  },
  {
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cd/7d/26/cd7d266a-e767-df3b-3981-59d9c01265b0/7891430798574.jpg/1200x1200bf-60.jpg',
    title: 'Ao vivo',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d0000b273748b2d7077a8db9c93517ce1',
    title: 'Indigo Borboleta anil',
  },

  {
    img: 'https://i.scdn.co/image/ab67616d0000b2736ac9c35f920912f7eaf364b0',
    title: 'rap é compromisso', 
  },
];
