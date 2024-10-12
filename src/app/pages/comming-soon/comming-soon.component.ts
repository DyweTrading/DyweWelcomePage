import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  standalone: true,
  imports: [],
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss'],
})
export class CommingSoonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  public scale = 50;
  public breaks = 0.001;
  public endSpeed = 0.06;
  public firstLetter = 220;
  public delay = 20;
  private offset: number[] = [];
  private offsetV: number[] = [];
  private intervalId: any;
  private resizeListener!: () => void;
  private animationFrameId: number | null = null; // Хранит идентификатор текущего кадра
  private isAnimating = false;

  ngAfterViewInit(): void {
    this.startSpin();
  }

  startSpin(): void {
    if (this.isAnimating) return;

    this.isAnimating = true; // Устанавливаем флаг анимации в true
    this.initializeTextAnimation();

    // Перезапуск рандомного времени каждые 5 секунд
    this.intervalId = setInterval(() => {
      this.resetAnimation();
    }, 10000);

    // Добавляем слушатель события изменения размера окна
    this.resizeListener = () => this.resizeCanvas();
    window.addEventListener('resize', this.resizeListener);
  }

  initializeTextAnimation(): void {
    const ctx = this.canvas.nativeElement.getContext('2d')!;
    const randomTime = this.getRandomTime();
    const timeText = randomTime.split('');
    const charsArray = '0123456789:hms '.split('');

    // Очистка предыдущих значений
    this.offset = [];
    this.offsetV = [];

    // Задаём параметры для анимации каждой цифры
    for (let i = 0; i < timeText.length; i++) {
      const f = this.firstLetter + this.delay * i;
      this.offsetV[i] = this.endSpeed + this.breaks * f;
      this.offset[i] = (-(1 + f) * (this.breaks * f + 2 * this.endSpeed)) / 2;
    }

    this.resizeCanvas();
    this.startAnimation(ctx, timeText, charsArray); // Начинаем анимацию
  }

  startAnimation(
    ctx: CanvasRenderingContext2D,
    textArray: string[],
    charsArray: string[]
  ): void {
    const loop = () => {
      const canvas = this.canvas.nativeElement;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      // Рисуем зелёную линию
      const lineY = (canvas.height - this.scale) / 2;
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, lineY, canvas.width, this.scale);

      // Ограничиваем область видимости
      ctx.save(); // Сохраняем текущее состояние контекста
      ctx.beginPath();
      ctx.rect(0, lineY, canvas.width, this.scale); // Определяем область обрезки
      ctx.clip(); // Обрезаем рисование внутри этой области

      for (let i = 0; i < textArray.length; i++) {
        ctx.fillStyle = '#f6f4eb';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.setTransform(
          1,
          0,
          0,
          1,
          Math.floor((canvas.width - this.scale * (textArray.length - 1)) / 2),
          Math.floor(canvas.height / 2)
        );

        let o = this.offset[i];
        while (o < 0) o++;
        o %= 1;
        const h = Math.ceil(canvas.height / 2 / this.scale);

        for (let j = -h; j < h; j++) {
          let c =
            charsArray.indexOf(textArray[i]) + j - Math.floor(this.offset[i]);
          while (c < 0) c += charsArray.length;
          c %= charsArray.length;
          const s = 1 - Math.abs(j + o) / (canvas.height / 2 / this.scale + 1);
          ctx.globalAlpha = s;
          if (window.innerWidth < 520) {
            this.scale = 40;
            ctx.font = `${this.scale * s}px Spongition`;
          } else {
            ctx.font = `${this.scale * s}px Spongition`;
          }
          ctx.fillText(charsArray[c], this.scale * i, (j + o) * this.scale);
        }

        this.offset[i] += this.offsetV[i];
        this.offsetV[i] -= this.breaks;
        if (this.offsetV[i] < this.endSpeed) {
          this.offset[i] = 0;
          this.offsetV[i] = 0;
        }
      }

      ctx.restore(); // Восстанавливаем контекст после обрезки

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  resetAnimation(): void {
    this.isAnimating = false; // Сбрасываем флаг анимации
    this.stopAnimation(); // Останавливаем текущую анимацию
    this.initializeTextAnimation(); // Инициализируем новую анимацию
  }

  stopAnimation(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null; // Сбрасываем идентификатор
    }
  }

  getRandomTime(): string {
    const randomHours = this.padZero(Math.floor(Math.random() * 24));
    const randomMinutes = this.padZero(Math.floor(Math.random() * 60));
    const randomSeconds = this.padZero(Math.floor(Math.random() * 60));

    return `${randomHours}h${randomMinutes}m${randomSeconds}s`;
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  resizeCanvas(): void {
    const canvas = this.canvas.nativeElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  ngOnDestroy(): void {
    this.stopAnimation(); // Остановить анимацию при уничтожении компонента
    clearInterval(this.intervalId); // Очистка интервала
    window.removeEventListener('resize', this.resizeListener); // Удаление слушателя изменения размера
    this.isAnimating = false; // Сбрасываем флаг анимации
  }
}
