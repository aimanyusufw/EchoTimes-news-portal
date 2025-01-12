<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationGroup = 'Content';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make()->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (string $operation, ?string $state, $set) {
                                if ($operation === 'edit' || is_null($state)) {
                                    return;
                                }
                                $set('slug', Str::slug($state));
                            })
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->readonly()
                            ->unique(ignoreRecord: true)
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Textarea::make('description')
                            ->rows(5)
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(2),
                    Forms\Components\Repeater::make("Sub Categories")
                        ->relationship("subCategories")
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->live(onBlur: true)
                                ->afterStateUpdated(function (string $operation, ?string $state, $set) {
                                    if ($operation === 'edit' || is_null($state)) {
                                        return;
                                    }
                                    $set('slug', Str::slug($state));
                                })
                                ->maxLength(255),
                            Forms\Components\TextInput::make('slug')
                                ->readonly()
                                ->unique(ignoreRecord: true)
                                ->required()
                                ->maxLength(255),
                            Forms\Components\Textarea::make('description')
                                ->rows(5)
                                ->required()
                                ->columnSpanFull(),
                        ])->collapsed()->itemLabel(fn(array $state): ?string => $state['name'] ?? null)->columns(['sm' => 2])->columnSpan(2)->deleteAction(
                            fn(Action $action) => $action->requiresConfirmation(),
                        ),
                ])->columns(['sm' => 2])->columnSpan(2),
                Forms\Components\Section::make()->schema([
                    Forms\Components\Placeholder::make("created at")
                        ->content(fn(?Category $record): string => $record ?  $record->created_at->diffForHumans() : "-"),
                    Forms\Components\Placeholder::make("updated at")
                        ->content(fn(?Category $record): string => $record ?  $record->updated_at->diffForHumans() : "-")
                ])->columnSpan(1)
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->since()
                    ->dateTimeTooltip()
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                //
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
