<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Filament\Resources\ArticleResource\RelationManagers;
use App\Models\Article;
use App\Models\SubCategory;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Components\SpatieTagsInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationGroup = 'Content';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()->schema([
                    Forms\Components\TextInput::make('title')
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

                    Forms\Components\Textarea::make('short_description')
                        ->rows(5)
                        ->columnSpanFull(),
                    Forms\Components\RichEditor::make('content')
                        ->required()
                        ->columnSpanFull(),
                    Forms\Components\Select::make('category_id')
                        ->searchable()
                        ->relationship(name: "category", titleAttribute: 'name'),
                    Forms\Components\Select::make('sub_category_id')
                        ->searchable()
                        ->options(function (callable $get) {
                            $provinceId = $get('category_id');
                            if ($provinceId) {
                                return SubCategory::where('category_id', $provinceId)->get()->mapWithKeys(function ($category) {
                                    return [$category->id => "{$category->name}"];
                                });;
                            }
                            return [];
                        }),
                    SpatieTagsInput::make('tags')
                        ->type('categories')
                ])->columns(['sm' => 2])->columnSpan(2),
                Forms\Components\Grid::make()->schema([
                    Forms\Components\Section::make()->schema([
                        Forms\Components\Placeholder::make("created at")
                            ->content(fn(?Article $record): string => $record ?  $record->created_at->diffForHumans() : "-"),
                        Forms\Components\Placeholder::make("updated at")
                            ->content(fn(?Article $record): string => $record ?  $record->updated_at->diffForHumans() : "-")
                    ]),
                    Forms\Components\Section::make()->schema([
                        Forms\Components\Placeholder::make('Author')
                            ->content(fn(?Article $record) => $record?->author?->name ?? '-')
                            ->label('Author'),
                        CuratorPicker::make("thumbnail_id")->label("Thumbnail"),
                        Forms\Components\DateTimePicker::make('published_at')
                            ->seconds(false)
                            ->default(now()),
                        Forms\Components\Radio::make('status')
                            ->options([
                                'draft' => "Draft",
                                'published' => "Published",
                                'archived' => "Archived"
                            ])
                            ->columns(2)
                            ->required(),
                    ]),
                ])->columnSpan(1)
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('media.path')
                    ->default("https://cdn-icons-png.flaticon.com/512/13434/13434972.png")
                    ->label("Thumbnail")
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->limit(40)
                    ->searchable(),
                Tables\Columns\TextColumn::make('author.name')
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->default("Uncategorize")
                    ->sortable(),
                Tables\Columns\TextColumn::make('subCategory.name')
                    ->default("Uncategorize")
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->formatStateUsing(function ($state) {
                        return match ($state) {
                            'draft' => "Draft",
                            'published' => "Published",
                            'archived' => "Archived",
                            default => 'Unknown',
                        };
                    })
                    ->badge()
                    ->colors([
                        'success' => 'published',
                        'primary' => 'draft',
                        'gray' => 'archived',
                    ]),
                Tables\Columns\TextColumn::make('published_at')
                    ->since()
                    ->dateTimeTooltip(),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
