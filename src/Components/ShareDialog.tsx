import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './Dialog';
import { Button } from './Button';


export const ShareDialog: React.FC = () => {

  const defaultTitle: string = 'PassMaster - Ваш надежный генератор паролей!';
  const defaultText: string = 'Смотрите, что я нашел! Это PassMaster - отличный сервис для генерации паролей. Попробуйте сами!';
  
  const shareToVK = () => {
    const url = 'https://vk.com/share.php?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(defaultTitle) + '&description=' + encodeURIComponent(defaultText);
    window.open(url, '_blank');
  };
  
  const shareToFacebook = () => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&quote=' + encodeURIComponent(defaultText);
    window.open(url, '_blank');
  };
  
  const shareToTwitter = () => {
    const url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(defaultText);
    window.open(url, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Поделиться</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Поделиться</DialogTitle>
          <DialogDescription>
            Выберите удобный для вас способ.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-4 py-4">
          <Button onClick={shareToVK} className="w-full sm:w-1/3 mx-2 mb-2">ВКонтакте</Button>
          <Button onClick={shareToFacebook} className="w-full sm:w-1/3 mx-2 mb-2">Facebook</Button>
          <Button onClick={shareToTwitter} className="w-full sm:w-1/3 mx-2 mb-2">Twitter</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
};
