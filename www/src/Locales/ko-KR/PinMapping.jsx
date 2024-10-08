export default {
	'header-text': '단자 할당 설정',
	'sub-header-text': '여기에서는 어떤 핀에 어떤 기능을 할당할지 설정할 수 있습니다. 어떤 버튼이 어떤 핀에 할당되어 있는지 모르겠다면 핀 확인 기능을 사용해 보세요',
	'alert-text':
		'연결되지 않거나 구현되지 않은 핀에 할당 설정을 하면 컨트롤러가 작동하지 않는 상태가 될 수 있습니다. 잘못된 설정을 초기화하고 싶다면 <2>설정 초기화</2> 페이지에서 초기화를 실행해 주세요.',
	'pin-viewer': '단자 확인',
	'pin-pressed': '이 버튼의 배선 대상은 {{pressedPin}} 번 단자 입니다,',
	'pin-header-label': '단자',

	'profile-label-title': '프로파일명',
	'profile-label-description': '최대 16문자',
	'profile-pin-mapping-title': '{{profileLabel}} - 단자할당',
	'profile-label-default': '프로파일 {{profileNumber}}',
	'profile-add-button': '+ 프로파일 추가',
	'profile-disabled': ' - (비활성화)',
	'profile-enabled-tooltip':
		'비활성화된 프로파일은 핫키로 프로파일 변경 시 사용할 수 없습니다',
	'profile-pins-warning':
		'프로파일 변경 핫키로 설정된 버튼이나 방향키의 설정 변경은 현재 프로파일 선택상황을 햇갈리게 할 수 있으므로 권장하지 않습니다',
	'profile-copy-base': 'Base 프로파일을 복사',
	errors: {
		conflict: '{{pin}} 번 단자에 이미 {{conflictedMappings}}에 할당 되어 있습니다.',
		required: '{{button}}의 설정은 필수 입니다.',
		invalid: '{{pin}}번 단자는 이 보드에서는 사용 할 수 없습니다.',
		used: '{{pin}}번 단자는 이미 다른기능에 할당 되어 있습니다.',
	},
	actions: {
		NONE: '없음',
		RESERVED: '예약',
		ASSIGNED_TO_ADDON: 'Add-on에 할당',
		BUTTON_PRESS_UP: '위',
		BUTTON_PRESS_DOWN: '아래',
		BUTTON_PRESS_LEFT: '왼쪽',
		BUTTON_PRESS_RIGHT: '오른쪽',
		BUTTON_PRESS_FN: '펑션(FN)',
		BUTTON_PRESS_DDI_UP: 'DDI 상',
		BUTTON_PRESS_DDI_DOWN: 'DDI 하',
		BUTTON_PRESS_DDI_LEFT: 'DDI 좌',
		BUTTON_PRESS_DDI_RIGHT: 'DDI 우',
		SUSTAIN_DP_MODE_DP: '십자키 모드: 십자키',
		SUSTAIN_DP_MODE_LS: '십자키 모드: 좌측 아날로그',
		SUSTAIN_DP_MODE_RS: '십자키 모드: 우측 아날로그',
		SUSTAIN_SOCD_MODE_UP_PRIO: '위 우선 모드(SOCD 클리너)',
		SUSTAIN_SOCD_MODE_NEUTRAL: '중립 모드(SOCD 클리너)',
		SUSTAIN_SOCD_MODE_SECOND_WIN: '후 입력 우선 모드(SOCD 클리너)',
		SUSTAIN_SOCD_MODE_FIRST_WIN: '선 입력 우선 모드(SOCD 클리너)',
		SUSTAIN_SOCD_MODE_BYPASS: 'SOCD클리너 끄기',
		BUTTON_PRESS_TURBO: '터보',
		BUTTON_PRESS_MACRO: '매크로 버튼',
		BUTTON_PRESS_MACRO_1: '매크로 1',
		BUTTON_PRESS_MACRO_2: '매크로 2',
		BUTTON_PRESS_MACRO_3: '매크로 3',
		BUTTON_PRESS_MACRO_4: '매크로 4',
		BUTTON_PRESS_MACRO_5: '매크로 5',
		BUTTON_PRESS_MACRO_6: '매크로 6',
		CUSTOM_BUTTON_COMBO: '멀티 맵핑에 할당됨',
		BUTTON_PRESS_E1: 'Extra 1',
		BUTTON_PRESS_E2: 'Extra 2',
		BUTTON_PRESS_E3: 'Extra 3',
		BUTTON_PRESS_E4: 'Extra 4',
		BUTTON_PRESS_E5: 'Extra 5',
		BUTTON_PRESS_E6: 'Extra 6',
		BUTTON_PRESS_E7: 'Extra 7',
		BUTTON_PRESS_E8: 'Extra 8',
		BUTTON_PRESS_E9: 'Extra 9',
		BUTTON_PRESS_E10: 'Extra 10',
		BUTTON_PRESS_E11: 'Extra 11',
		BUTTON_PRESS_E12: 'Extra 12',
	},
};
