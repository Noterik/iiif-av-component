/// <reference types="jquery" />
/// <reference types="jqueryui" />
import { BaseComponent, IBaseComponentOptions } from "@iiif/base-component";
import { Canvas, Range } from "manifesto.js";
import { IAVComponentData } from ".";
import { VirtualCanvas } from "./VirtualCanvas";
export interface IMaxMin {
    max: number;
    min: number;
}
export interface IAVCanvasInstanceData extends IAVComponentData {
    canvas?: Canvas | VirtualCanvas;
    range?: Range;
    visible?: boolean;
    volume?: number;
}
export declare class CanvasInstance extends BaseComponent {
    private _$canvasContainer;
    private _$canvasDuration;
    private _$canvasHoverHighlight;
    private _$canvasHoverPreview;
    private _$canvasTime;
    private _$canvasTimelineContainer;
    private _$controlsContainer;
    private _$durationHighlight;
    private _$hoverPreviewTemplate;
    private _$nextButton;
    private _$optionsContainer;
    private _$playButton;
    private _$prevButton;
    private _$rangeHoverHighlight;
    private _$rangeHoverPreview;
    private _$rangeTimelineContainer;
    private _$timeDisplay;
    private _$timelineItemContainer;
    private _canvasClockFrequency;
    private _canvasClockInterval;
    private _canvasClockStartDate;
    private _canvasClockTime;
    private _canvasHeight;
    private _canvasWidth;
    private _compositeWaveform;
    private _contentAnnotations;
    private _data;
    private _highPriorityFrequency;
    private _highPriorityInterval;
    private _isPlaying;
    private _isStalled;
    private _lowPriorityFrequency;
    private _lowPriorityInterval;
    private _mediaSyncMarginSecs;
    private _rangeSpanPadding;
    private _readyMediaCount;
    private _stallRequestedBy;
    private _volume;
    private _wasPlaying;
    private _waveformCanvas;
    private _waveformCtx;
    ranges: Range[];
    waveforms: string[];
    private _$canvasLoadingProgress;
    private _$fullscreenButton;
    $playerElement: JQuery;
    isOnlyCanvasInstance: boolean;
    logMessage: (message: string) => void;
    constructor(options: IBaseComponentOptions);
    init(): void;
    private _getBody;
    private _getDuration;
    data(): IAVCanvasInstanceData;
    isVirtual(): boolean;
    isVisible(): boolean;
    includesVirtualSubCanvas(canvasId: string): boolean;
    set(data: IAVCanvasInstanceData): void;
    private _hasRangeChanged;
    private _getRangeForCurrentTime;
    private _rangeSpansCurrentTime;
    private _rangeNavigable;
    private _render;
    getCanvasId(): string | undefined;
    private _updateHoverPreview;
    private _previous;
    private _next;
    destroy(): void;
    private _convertToPercentage;
    private _renderMediaElement;
    private _getWaveformData;
    private _renderWaveform;
    private _drawWaveform;
    private _scaleY;
    private _getWaveformMaxAndMin;
    private _updateCurrentTimeDisplay;
    private _updateDurationDisplay;
    private _renderSyncIndicator;
    setCurrentTime(seconds: number): void;
    getCurrentTime(): number;
    private _rewind;
    private _fastforward;
    play(withoutUpdate?: boolean): void;
    pause(withoutUpdate?: boolean): void;
    private _isNavigationConstrainedToRange;
    private _canvasClockUpdater;
    private _highPriorityUpdater;
    private _lowPriorityUpdater;
    private _updateMediaActiveStates;
    private _pauseMedia;
    private _setMediaCurrentTime;
    private _synchronizeMedia;
    private _checkMediaSynchronization;
    private _playbackStalled;
    resize(): void;
}
export declare class CanvasInstanceEvents {
    static NEXT_RANGE: string;
    static PAUSECANVAS: string;
    static PLAYCANVAS: string;
    static PREVIOUS_RANGE: string;
}