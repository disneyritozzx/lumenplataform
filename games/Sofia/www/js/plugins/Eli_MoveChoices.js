//============================================================================
// Eli_MoveChoices.js
//============================================================================

/*:
@plugindesc v1.7 - Change the position of the Choice Window.
@author Hakuen Studio

@help 
******************************************************************************
                            Join me on Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Introduction
==============================================================================

By default, the choice window can only be in three positions:
					Left | Center | Right.
But what if you wanted to give her a more dynamic position?
With this plugin, you can choose the position of the window using two 
variables or among nine different predefined positions. It is also possible 
to add a movement to the window.

==============================================================================
Features
==============================================================================

The plugin offers the following:
• Enable or disable the plugin or the movement of the window with plugin 
commands.
• Set the choice position on screen using two variables or using 9 different
predefined positions.
• The choice cannot be selected until the window finish the movement.
• You can set a delay to the choice to prevent the players from accidently
choose a choice when pressing the ok button too quick.

==============================================================================
How to use
==============================================================================

Configure the plugin parameters.
• OffsetX and Y > Here you can find options to leave the window's initial 
position off the screen. The plugin will automatically calculate the width of 
the window and place it off the screen. This is useful to give the player the 
impression of the window coming from outside the screen. You can also choose 
not to use the offset.
• startPosition and finalPosition> Here you can configure predefined 
positions for windows:

  TopLeft	    TopCenter	     TopRight
	 1			    2			    3

CenterLeft     CenterMiddle    CenterRight
	 4				5				6

BottomLeft     BottomMiddle    BottomRight
	 7				8				9

• VarPos > Will use the values ​​of the variables(only works for 
the final pos).

In the case of the Start position, the offset value X and Y will be added 
if you choose to use it.
In the case of the Final position, you can also choose VarPos which 
will cause the position to be determined by the variables.

• Plugin commands:

◆ Plugin Command：ChoiceCustomPos > true/false (To enable or disable the 
plugin)
◆ Plugin Command：ChoiceMovement > true/false (To enable or disable the 
movement feature)
◆ Plugin Command：ChoiceOffsetX > Adjust the offset X: left | right | none
◆ Plugin Command：ChoiceOffsetY > Adjust the Y: up offset | down | none
◆ Plugin Command：ChoiceStartPos > Adjust the starting position: See 
the name of the positions above.
◆ Plugin Command：ChoiceFinalPos > Adjust the final position: See the 
name of the positions above.
◆ Plugin Command: ChoiceDelay > Choose a number to add to the delay(frames).
◆ Plugin Command: ChoiceMoveSpeed > The speed of the movement. Lower numbers 
is faster.

==============================================================================
Example
==============================================================================

1. To place the choices window at the player's position, simply store the 
value of the variable using the script field inside the variable control.
VarId X Pos = $gamePlayer.screenY();
VarId Y Pos = $gamePlayer.screenY();

2. To put in the position of the event:
VarId X Pos = $gameMap.event(eventID).screenX();
VarId Y Pos = $gameMap.event(eventID).screenY();

==============================================================================
Terms of Use
==============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

==============================================================================
Contact
==============================================================================

RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio
Facebook - https://www.facebook.com/hakuenstudio

==============================================================================
Update log
==============================================================================
Version 1.7 - 08/22/2020
- Code restructuring.
Version 1.6 - 07/28/2020
- Add a parameter to enable/disable the plugin.
- Removed the switch from plugin commands.
Version 1.5 - 06/22/2020
- Code clean up.
Version 1.4 - 05/21/2020
- Added dependency with Eli's_Book.js
- Changed the plugin name to Eli_MoveChoices
- Added movement option in the choice window!
- Added switch to enable or disable movement for the window.
- Added predefined position parameters.
- Added plugin commands to change the position of the window.
Version 1.3 - 05/11/2020
- Dropped plugin commands, now only work with switch and variable.
- Code clean up! Now offer better compatibility with other plugins.
Version 1.2 - 04/19/2020
- Code clean up.
Version 1.1 - 01/02/2020
- Add option to use formulas in plugin commands.
- Code modifications and new parameters.
Version 1.0 - 10/31/2019
- Plugin release! 

@param enable
@text Enable plugin
@type boolean
@desc Enable or disable the plugin.
@default true

@param movement
@text Enable movement
@type boolean
@desc Enable or disable the movement feature.
@default true

@param moveInDuration
@text The speed of the movement
@type number
@desc Set here how fast the window will move. Lower numbers more faster.
@default 30

@param delay
@text Delay in frames
@type number
@desc Set the delay value to be able to confirm a choice. Leave it to 0 if you don't want to use.
@default 15

@param Starting position

@param startPreset
@text Start position(Origin)
@type select
@desc Choose a value for the initial positions X and Y.
@option Top Left
@value 1
@option Top Center
@value 2
@option Top Right
@value 3
@option Center Left
@value 4
@option Center Middle
@value 5
@option Center Right
@value 6
@option Bottom Left
@value 7
@option Bottom Center
@value 8
@option Bottom Right
@value 9
@default 4
@parent Starting position

@param offsetX
@text Offset X
@type select
@desc An additional value for the X coordinate. It will push the window out of screen.
@option Out of screen(left)
@value left
@option Out of screen(right)
@value right
@option none
@value 0
@default 0
@parent Starting position

@param offsetY
@text Offset Y
@type select
@desc An additional value for the Y coordinate. It will push the window out of screen.
@option Out of screen(up)
@value up
@option Out of screen(down)
@value down
@option none
@value 0
@default 0
@parent Starting position

@param ---Final position

@param finalPreset
@text Final position(Target)
@type select
@desc Choose a value for the final positions X and Y.
@option Custom Position
@value 0
@option Top Left
@value 1
@option Top Center
@value 2
@option Top Right
@value 3
@option Center Left
@value 4
@option Center Middle
@value 5
@option Center Right
@value 6
@option Bottom Left
@value 7
@option Bottom Center
@value 8
@option Bottom Right
@value 9
@default 4
@parent ---Final position

@param targetX
@text Var Id - Target X position
@type variable
@desc Only works if you choose custom above. Target position X of the Choice Window.
@default 0
@parent ---Final position

@param targetY
@text Var Id - Target Y position
@type variable
@desc Only works if you choose custom above. Target position Y of the Choice Window.
@default 0
@parent ---Final position

*/

/*:pt
@plugindesc v1.7 - Muda a posição da janela de escolhas.
@author Hakuen Studio

@help 
******************************************************************************
                          Junte-se a mim no Patreon!
                    https://www.patreon.com/hakuenstudio
******************************************************************************
==============================================================================
Introdução
==============================================================================

	Por padrão a janela de escolhas pode ficar somente em três posições:
Esquerda | Centro | Direita.
	Mas e se você quisesse dar uma posição mais dinâmica para ela?
	Com ele, você poderá escolher a posição da janela de escolhas usando duas 
variáveis ou entre nove diferente posições predefinidas. Também é possível 
adicionar um movimento a janela.

==============================================================================
Funcionalidades
==============================================================================

O plugin oferece o seguinte:
• Ative ou desative o plugin e/ou a movimentação da janela com comandos de 
plugin.
• Escolha uma posição para a janela dentre as nove predefinidas, ou uma outra
a sua escolha através de duas variáveis.
• Adicione um delay em frames antes de selecionar a escolha. Isso é útil para
jogadores que apertam o botão de confirmação repetidas vezes, escolhendo a 
primeira escolha por acidente.

==============================================================================
Como usar
==============================================================================

	Configure os parâmetros de plugin.
• OffsetX e Y > Aqui você poderá encontrar opções para deixar a posição 
inicial da janela fora da tela. O plugin calculará automaticamente a largura 
da janela e a colocará para fora da tela. Isso é útil para dar a impressão 
ao jogador da janela vindo de fora da tela. Você também pode optar por não 
usar o offset.
• startPosition e finalPosition > Aqui você poderá configurar posições 
predefinidas para as janelas:

  TopLeft	    TopCenter	     TopRight
	 1			    2			    3

CenterLeft     CenterMiddle    CenterRight
	 4				5				6

BottomLeft     BottomMiddle    BottomRight
	 7				8				9

• VarPos > Usará os valores das variáveis.

No caso da Start position, será somado o valor offset X e Y caso opte por 
usar.
No caso da Final position, você também pode escolher VarPos o que 
fará com que a posição seja determinada pelas variáveis.

• Comandos de plugin:

◆Plugin Command：ChoiceCustomPos > true/false (Para ativar ou desativar o 
plugin)
◆Plugin Command：ChoiceMovement > true/false (Para ativar ou desativar o 
movimento)
◆Plugin Command：ChoiceOffsetX > Ajuste o offset X: left | right | none
◆Plugin Command：ChoiceOffsetY > Ajuste o offset Y: up | down | none
◆Plugin Command：ChoiceStartPos > Ajuste a posição inicial: Veja o nome
das posições acima.
◆Plugin Command：ChoiceFinalPos > Ajuste a posição final: Veja o nome 
das posições acima.
◆Plugin Command: ChoiceDelay > Escolha um número para adicionar ao delay
(frames).
◆Plugin Command: ChoiceMoveSpeed > A velocidade com a qual a janela se 
moverá. Quanto menor o número, mais rápido.

==============================================================================
Exemplo
==============================================================================

1. Para colocar a janela de ajuda na posição do player, armazene o seguinte 
valor dentro do controle de variáveis no campo de script call:
VarId X Pos = $gamePlayer.screenY();
VarId Y Pos = $gamePlayer.screenY();

2. Para colocar na posição de um evento:
VarId X Pos = $gameMap.event(eventID).screenX();
VarId Y Pos = $gameMap.event(eventID).screenY();

==============================================================================
Termos de uso
==============================================================================

https://www.hakuenstudio.com/rpg-maker/terms-of-use

==============================================================================
Contato
==============================================================================

RM Web - https://forums.rpgmakerweb.com/index.php?members/eliaquim.123037/
Centro Rpg Maker - https://centrorpg.com/index.php?action=profile
Instagram - https://www.instagram.com/hakuenstudio
Twitter - https://twitter.com/hakuen_studio
Facebook - https://www.facebook.com/hakuenstudio

==============================================================================
Log de atualizações
==============================================================================
Versão 1.7 - 22/08/2020
- Reestruturação do código.
Versão 1.6 - 28/07/2020
- Adicionado um parâmetro para habilitar e desabilitar o plugin.
- Removido a switch para um comando de plugin.
Versão 1.5 - 22/06/2020
- Limpeza no código.
Versão 1.4 - 21/05/2020
- Adicionado dependência com Eli's_Book.js
- Nome do plugin mudado para Eli_MoveChoices
- Adicionado opção de movimento na janela de escolhas!
- Adicionado switch para ativar ou desativar a movimentação.
- Adicionado parâmetros de posição predefinidas.
Versão 1.3 - 11/05/2020
- Removido comandos de plugin, agora só funciona com variáveis e switchs.
- Melhoria no código! Agora a compatibilidade com outros plugins é bem alta!
Versão 1.2 - 19/04/2020
- Limpeza no código.
Versão 1.1 - 02/01/2020
- Adicionado opção para usar fórmulas no comando de plugin.
- Modificações no código e novos parâmetros.
Versão 1.0 - 31/10/2019
- Plugin lançado!

*/

"use strict"; 

var Imported = Imported || {};
Imported.Eli_MoveChoices = true;

var Eli = Eli || {};
Eli.MoveChoices = Eli.MoveChoices || {};

Eli.needBook = function() {
    if(!Eli.alert){
        window.alert(`Eli's_Book.js was not found. 
Please download the latest version for free.`);
        if(confirm) {
            window.open('https://hakuenstudio.itch.io/elis-book-rpg-maker-mv');
        }
        Eli.alert = true;
    }
};

if(!Imported.Eli_Book) Eli.needBook();

Eli.MoveChoices.Parameters = PluginManager.parameters('Eli_MoveChoices');
Eli.MoveChoices.Param = eli.convertParameters(Eli.MoveChoices.Parameters) || {};
delete Eli.MoveChoices.Parameters;

/* Plugin Class */

class Eli_MoveChoices{

	constructor(){}

	gameEli(){
		return $gameEli.moveChoices();
	};

	isEnable(){
		return this.gameEli().enable;
	};

	getDelay(){
		return this.gameEli().delay;
	};

	canMove(){
		return this.gameEli().movement;
	};

	getInDuration(){
		return this.gameEli().moveInDuration;
	};

	getOffsetX(){
		return this.gameEli().offsetX;
	};

	getOffsetY(){
		return this.gameEli().offsetY;
	};

	getTargetX(){
		return this.gameEli().targetX;
	};

	getTargetY(){
		return this.gameEli().targetY;
	};

	getStartPreset(){
		return this.gameEli().startPreset;
	};

	getFinalPreset(){
		return this.gameEli().finalPreset;
	};

	executeCommand(command, args){
		const allCommands = {
			CHOICECUSTOMPOS: 'setCustomPos',
			CHOICEMOVEMENT: 'setMovement',
			CHOICEOFFSETX: 'setOffSetX',
			CHOICEOFFSETY: 'setOffSetY',
			CHOICESTARTPOS: 'setStartPosition',
			CHOICEFINALPOS: 'setFinalPosition',
			CHOICEDELAY: 'setDelay',
			CHOICEMOVESPEED: 'setMoveSpeed'
		}
		const result = allCommands[command.toUpperCase()];
		if(result) this[result](args);
	};
	
	setCustomPos(args){
		this.gameEli().enable = eli.toBoolean(args[0]);
	};
	
	setMovement(args){
		this.gameEli().movement = eli.toBoolean(args[0]);
	};
	
	setOffSetX(args){
		this.gameEli().offsetX = args[0].toLowerCase();
	};
	
	setOffSetY(args){
		this.gameEli().offsetY = args[0].toLowerCase();
	};
	
	setStartPosition(args){
		const presetArray = ['varpos', 'topleft', 'topcenter', 'topright', 'centerleft', 'centermiddle', 'centerright', 'bottomleft', 'bottomcenter', 'bottomright']
		this.gameEli().startPreset = presetArray.indexOf(args[0].toLowerCase());
	};
	
	setFinalPosition(args){
		const presetArray = ['varpos', 'topleft', 'topcenter', 'topright', 'centerleft', 'centermiddle', 'centerright', 'bottomleft', 'bottomcenter', 'bottomright']
		this.gameEli().finalPreset = presetArray.indexOf(args[0].toLowerCase());
	};
	
	setDelay(args){
		this.gameEli().delay = +args[0];
	};
	
	setMoveSpeed(args){
		this.gameEli().moveInDuration = +args[0];
	};

};

const $moveChoice = new Eli_MoveChoices();

/* Game Eli */

Eli.MoveChoices.Game_Eli_initialize = Game_Eli.prototype.initialize;
Game_Eli.prototype.initialize = function(){
	Eli.MoveChoices.Game_Eli_initialize.call(this);
	const value = this.moveChoicesParameters();
	this.contents._moveChoices = value;
};

Game_Eli.prototype.moveChoicesParameters = function(){
	return eli.makeDeepCopy(Eli.MoveChoices.Param);
};

Game_Eli.prototype.moveChoices = function(){
	return this.contents._moveChoices;
};

/* Plugin command */

Eli.MoveChoices.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Eli.MoveChoices.Game_Interpreter_pluginCommand.call(this, command, args);
	$moveChoice.executeCommand(command, args);
};

/* Window Choice List */

Eli.MoveChoices.Window_ChoiceList_initialize = Window_ChoiceList.prototype.initialize;
Window_ChoiceList.prototype.initialize = function(messageWindow) {
	Eli.MoveChoices.Window_ChoiceList_initialize.call(this, messageWindow);
	this.initMoveObjs();
};

Window_ChoiceList.prototype.initMoveObjs = function(){
	this._moveInDuration = 0;
	this._limitX = 0;
	this._limitY = 0;
	this._targetX = 0;
	this._targetY = 0;
	this._originX = 0;
	this._originY = 0;
	this._delay = 0;
};

Eli.MoveChoices.Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() {
	Eli.MoveChoices.Window_ChoiceList_updatePlacement.call(this);
	if($moveChoice.isEnable()){
		this.setupMovement();
		this.prepareForMovement();
	}
};

Window_ChoiceList.prototype.setupMovement = function(){
	this.setLimits();
	this.setOriginAndDestination();
	this.setDelay();
};

Window_ChoiceList.prototype.setLimits = function(){
	this._limitX = Graphics.width - this.width;
	this._limitY = Graphics.height - this.height;
};

Window_ChoiceList.prototype.setOriginAndDestination = function(){
	const originPosition = this.setStartPosition();
	const targetPosition = this.setFinalPosition();
	this._originX = originPosition.x
	this._originY = originPosition.y;
	this._targetX = targetPosition.x;
	this._targetY = targetPosition.y;
};

Window_ChoiceList.prototype.setDelay = function(){
	this._delay = $moveChoice.getDelay();
};

Window_ChoiceList.prototype.setStartPosition = function(){
	let result = {x: 0, y:0};
	const presetParam = $moveChoice.getStartPreset();
	const w = this.width;
	const h = this.height;
	const preset = eli.presetPos(w, h, 0, 0, presetParam);
	result.x = preset.x + this.setOffsetX();
	result.y = preset.y + this.setOffsetY();
	return result;
};

Window_ChoiceList.prototype.setFinalPosition = function(){
	let result = {x: 0, y:0};
	const presetParam = $moveChoice.getFinalPreset()
	const customX = Math.min($gameVariables.value($moveChoice.getTargetX()), this._limitX);
	const customY = Math.min($gameVariables.value($moveChoice.getTargetY()), this._limitY);
	const w = this.width;
	const h = this.height;
	const presetResult = eli.presetPos(w, h, customX, customY, presetParam)
	result.x = presetResult.x;
	result.y = presetResult.y;
	return result;
};

Window_ChoiceList.prototype.prepareForMovement = function(){
	if($moveChoice.canMove()){
		this._moveInDuration = $moveChoice.getInDuration();
		this.x = this.getOriginX();
		this.y = this.getOriginY();
	}else{
		this.x = this.getTargetX();
		this.y = this.getTargetY();
	}
};

Window_ChoiceList.prototype.setOffsetX = function(){
	const offsetX = $moveChoice.getOffsetX();
	const options = {
		left: this.width - (this.width*2),
		right: Graphics.width + this.width
	}
	return options[offsetX] || 0;
};

Window_ChoiceList.prototype.setOffsetY = function(){
	const offsetY = $moveChoice.getOffsetY();
	const options = {
		up: this.height - (this.height*2),
		down: Graphics.height + this.height
	}
	return options[offsetY] || 0;
};

Eli.MoveChoices.Window_ChoiceList_update = Window_ChoiceList.prototype.update;
Window_ChoiceList.prototype.update = function(){
	Eli.MoveChoices.Window_ChoiceList_update.call(this);
	this.updateMoveIn();
};

Window_ChoiceList.prototype.updateMoveIn = function() {
	if (this.getMoveInDuration() > 0) {
		let d = this.getMoveInDuration();
		this.x = (this.x * (d - 1) + this.getTargetX()) / d;
		this.y = (this.y * (d - 1) + this.getTargetY()) / d;
		this._moveInDuration--;
	}
};

Window_ChoiceList.prototype.isOkEnabled = function() { // Overwrite
	if(!this.getMoveInDuration()){
		this._delay--;
		if(this._delay <= 0) return true;
	}else{
		return false;
	}
};

Window_ChoiceList.prototype.getOriginX = function(){
	return this._originX;
};

Window_ChoiceList.prototype.getOriginY = function(){
	return this._originY;
};

Window_ChoiceList.prototype.getTargetX = function(){
	return this._targetX;
};

Window_ChoiceList.prototype.getTargetY = function(){
	return this._targetY;
};

Window_ChoiceList.prototype.getMoveInDuration = function(){
	return this._moveInDuration;
};

